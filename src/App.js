import { RecoilRoot } from "recoil";
import MyRoutes from "./MyRoutes";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <MyRoutes />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
