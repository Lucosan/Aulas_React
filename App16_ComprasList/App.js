import * as SQLite from 'expo-sqlite'
import React, { useEffect, useState } from 'react'
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

const db = SQLite.openDatabase('db_products.db')

const App = () => {
  const [product, setProduct] = useState('')
  const [products, setProducts] = useState([])
  const [amount, setAmount] = useState('')

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, amount INT, name VARCHAR(20))`,
        []
      )
    })
  }

  const deleteProduct = id => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM products WHERE id = ?`,
        [id],
        (sqlTxn, res) => {
          setProducts('')
          getProducts()
        }
      )
    })
  }

  const addProduct = () => {
    if (!product || !amount) {
      alert('Por favor, informe o produto e sua respectiva quantidade!')
      return
    }
    if (!product) {
      alert('Por favor, informe o produto!')
      return
    }
    if (!amount) {
      alert('Por favor, informe a respectiva quantidade!')
      return
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO products (amount,name) VALUES (?,?)`,
        [product, amount],
        (sqlTxn, res) => {
          getProducts()
          setProduct('')
          setAmount('')
        }
      )
    })
  }

  const getProducts = () => {
    db.transaction(txn => {
      txn.executeSql(`SELECT * FROM products`, [], (sqlTxn, res) => {
        let len = res.rows.length

        if (len > 0) {
          let results = []
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i)
            results.push({ id: item.id, amount: item.amount, name: item.name })
          }

          setProducts(results)
        }
      })
    })
  }

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderColor: '#03f',
          padding: 8,
          margin: 8,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', marginRight: 20 }}>
            {item.name}x{' '}
          </Text>
          <Text style={{ fontSize: 16 }}>{item.amount}</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              deleteProduct(item.id)
            }}
          >
            X
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  useEffect(() => {
    async function fetchData() {
      await createTables()
      await getProducts()
    }
    fetchData()
  }, [])

  return (
    <View style={{ paddingTop: 20 }}>
      <StatusBar backgroundColor='white' />

      <Text style={styles.title}>Lista de compras</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 16,
          paddingHorizontal: 4,
        }}
      >
        <TextInput
          style={styles.input2}
          placeholder='Quantidade'
          value={amount}
          onChangeText={setAmount}
          keyboardType='numeric'
        />

        <TextInput
          style={styles.input}
          placeholder='Produto'
          value={product}
          onChangeText={setProduct}
        />

        <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={addProduct}
          >
            +
          </TouchableOpacity>
        </View>
      </View>
              
      <FlatList data={products} renderItem={renderItem} key={t => t.id} />
      {products.length === 0 && (<Text style={{textAlign: 'center'}}>Sem produtos</Text>)}

    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 32,
    padding: 8,
    color: '#0ef',
    margin: 16,
  },
  input: {
    width: 256,
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: '#03f',
    color: '#0ef',
  },
  input2: {
    width: 200,
    marginRight: 5,
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: '#03f',
    color: '#0ef',
  },
})

export default App