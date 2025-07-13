import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import "./i18n";
import { Suspense } from "react";
import {
  Overview,
  Account,
  Transactions,
  Analytics,
  Settings,
  Login,
  Home,
} from "./pages";
import ScrollToTop from "./components/ScrollToTop";
import { OrbitProgress } from "react-loading-indicators";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <ThemeProvider>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <OrbitProgress
              variant="track-disc"
              speedPlus={0}
              easing="ease-in-out"
              color={"#155dfc"}
            />
          </div>
        }
      >
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Private Routes */}
          <Route
            path="/overview"
            element={
              <PrivateRoute>
                <Overview />
              </PrivateRoute>
            }
          />
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <PrivateRoute>
                <Analytics />
              </PrivateRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <PrivateRoute>
                <Transactions />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
