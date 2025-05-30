
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layout/app-layout";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./components/protected-route";
import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import PostJob from "./pages/post-jobs";
import JobListing from "./pages/job-listing";
import MyJobs from "./pages/my-jobs";
import SavedJobs from "./pages/saved-job";
import JobPage from "./pages/job";

import "./App.css";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          
          <ProtectedRoute>
          <Onboarding />
        </ProtectedRoute>
         
        ),
      },
      {
        path: "/jobs",
        element: (
         
          <ProtectedRoute>
          <JobListing />
        </ProtectedRoute>
      
        ),
      },
      {
        path: "/post-job",
        element: (
          
          <ProtectedRoute>
          <PostJob />
        </ProtectedRoute>
         
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>

         
        ),
      },
      {
        path: "/job/:id",
        element: (
        
          <ProtectedRoute>
          <JobPage />
        </ProtectedRoute>
       
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
  );
}

export default App;
      