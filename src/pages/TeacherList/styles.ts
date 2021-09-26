import { StyleSheet } from "react-native";

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
    fontFamily: "Poppins_400Regular",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
    fontFamily: "Poppins_400Regular",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    alignContent: "center",
    justifyContent: "center",
    height: 54,
    marginRight: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f7",
    flex: 1,
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm: {
    marginBottom: 24,
  },
  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },

  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
    fontFamily: "Poppins_400Regular",
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBlock: {
    width: "48%",
  },
  submitButton: {
    backgroundColor: "#04d361",
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
    color: "#fff",
  },
});

export default styles;
