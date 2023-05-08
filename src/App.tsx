import { AppProvider } from "context/AppContext";
import { Menu } from "pages/menu";

export default function App() {
  return (
    <AppProvider>
      <Menu />
    </AppProvider>
  );
}
