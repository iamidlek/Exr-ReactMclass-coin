import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);