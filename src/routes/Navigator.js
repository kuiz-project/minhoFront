import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../Layout/Mainlayout";
import { Home, Login, Test, Pdf, Mytest, Upload, Signup, TestList} from "../pages";
import PDFViewer from "./../pages/PDFViewer/PDFViewer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/signup/*" element={<Signup />} />
      <Route path="/test/*" element={<Test />} />
      <Route path="/testlist" element={<TestList/>} />
      <Route path="/pdf/*" element={<Pdf />} />
      <Route path="/mytest/*" element={<Mytest />} />
      <Route path="/upload/*" element={<Upload />} />
      <Route path="/view/*" element={<PDFViewer />} />
      <Route path="*" element={<div>없는페이지</div>} />
    </Route>
  )
);

const Navigator = () => {
  return <RouterProvider router={router} />;
};

export default Navigator;
