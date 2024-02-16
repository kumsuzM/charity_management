import Charities from "./Charities";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Charity Management</h1>
      <Charities />
    </QueryClientProvider>
  );
}

export default App;
