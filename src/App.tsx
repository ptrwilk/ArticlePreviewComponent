import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import ArticlePreview from "./Components/ArticlePreview/ArticlePreview";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 13,
    },
    h1: {
      fontSize: 16,
    },
    h2: {
      fontSize: 13,
    },
    fontFamily: "Manrope",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <ArticlePreview />
      </div>
    </ThemeProvider>
  );
}

export default App;
