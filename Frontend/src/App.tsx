import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import "./i18n";
import { Suspense } from "react";
import { Home, Account, Transactions, Analytics, Settings } from "./pages";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading translations...</div>}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/settings" element={<Settings />} />{" "}
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
