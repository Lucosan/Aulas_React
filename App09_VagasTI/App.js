import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Vaga from "./components/Vaga";
export default function App() {
  const vagas = [
    {
      title: "Desenvolvedor Front-End Pleno",
      salario: 14000,
      descricao:
        "Atuar no desenvolvimento de sistema contábil de uma empresa Canadense. Sólida experiência em JavaScript, Angular e CSS.",
      contato: "vagas@setordeemprego.com.br",
    },
    {
      title: "Desenvolvedor Back-End Junior",
      salario: 4000,
      descricao:
        "Atuar no desenvolvimento de endpoints para APIs de uma empresa de e-commerce. Diferenciais:experiência em Java, React e Metodologias Ágeis.",
      contato: "empregosRH@empresanome.com.br",
    },
    {
      title: "Suporte TI - Nível 2",
      salario: 'Confidencial',
      descricao:
        "Confidencial. Salário a negociar",
      contato: "euamosuporte@supportenterprise.com.br",
    },
    {
      title: "Desenvolvedor Full-Stack Sênior",
      salario: 8400,
      descricao:
        "Atuar na migração de um sistema legado para o framework Laravel. Necessário sólido conhecimento em .XML, .ASPX. Desejável conhecimento no framework React.",
      contato: "vagas@headhunters.com.br",
    },
  ];
  ;
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas de TI</Text>
      <View style={{ height: 500, marginTop: 10 }}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {vagas.map(vaga => {
            return (
              <Vaga
                title={vaga.title}
                salario={vaga.salario}
                descricao={vaga.descricao}
                contato={vaga.contato}
              />
            );
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 36,
    color: "#efc",
    marginVertical: 5,
    textAlign: "center",
    
  },
});