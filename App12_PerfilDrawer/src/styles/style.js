{/* Coloquei os estilos dentro das páginas e fora porque de vez em quando eles não estavam abrindo. */}

const styles = {
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#0ef",
  },
  text: {
    marginLeft: 16,
    color: "#eceff4",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  img: {
    width: 250,
    aspectRatio: 1,
    borderWidth: 5,
    borderColor: "#000",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 48,
  },
  wrapper: {
    backgroundColor: "#0af",
    marginTop: 18,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 16,
  },
};
export default styles;
