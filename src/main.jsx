import React, {lazy, Suspense} from 'react';
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'
import './index.css'
import App from './App.jsx'
import { mainNavbarItems } from './components/consts/navbarItems.jsx'

import { ThemeProvider } from '@mui/material';

{/* Basic approach (without mapping methods) */}
import Authentication from './pages/Authentication/Authentication'
import Databases from './pages/Databases/Databases'
import Storages from './pages/Storages/Storages'
import Hosting from './pages/Hosting/Hosting'
import Functions from './pages/Functions/Functions'
import MachineLearning from './pages/MachineLearning/MachineLearning'
import { dashboardTheme } from './dashboardTheme.jsx';
// ===============================================================


// Fail Attempt (try to be more aware on defining Objects);
// const pagesContext = import.meta.glob("./pages/**/*.jsx");

// const route = Object.keys(pagesContext).map((key) => {
//   const path = key.replace('./pages', '').replace('.jsx', '').replace(/\/index$/,'');
//   const Components = React.lazy(pagesContext[key]); // Get any default exports

//   return { path: `/${path.toLowerCase()}`, Components};
// });
// ===============================================================

{/* Fail Attempt */}
// const pageNames = [
//   "Authentication",
//   "Databases",
//   "Storages",
//   "Hosting",
//   "Functions",
//   "MachineLearning",
// ]

// const pageList = pageNames.map((pages) => ({
//   path: `/${pages.toLowerCase()}`,
//   Component: lazy(() => import(`./pages/${pages}/${pages}`)),
// }));
// ==============================================================

const dynamicImport = (targetFile) => lazy(() => import(`./pages/${targetFile}/${targetFile}.jsx`));

{/* Fail Attempt */}
// const [
//   Authentication,
//   Databases,
//   Storages,
//   Hosting,
//   Functions,
//   MachineLearning,
// ] = lazy(() => import(`./pages//*.jsx`)); // wild card does support;

{/* Second alternative to using mapping methods */}
// const pages = [
  
//   {componentNames:"Authentication", path:'authentication', lazyComponent: lazy(() => import("./pages/Authentication/Authentication")) },
//   {componentNames:"Databases", path:'databases', lazyComponent: lazy(() => import("./pages/Databases/Databases")) },
//   {componentNames:"Storages", path:'storages', lazyComponent: lazy(() => import("./pages/Storages/Storages")) },
//   {componentNames:"Hosting", path:'hosting', lazyComponent: lazy(() => import("./pages/Hosting/Hosting")) },
//   {componentNames:"Functions", path:'functions', lazyComponent: lazy(() => import("./pages/Functions/Functions")) },
//   {componentNames:"MachineLearning", path:'machinelearning', lazyComponent: lazy(() => import("./pages/MachineLearning/MachineLearning")) },

// ]
// ==============================================================

// const dynamicImport2 =  (target) => lazy(() => import(`./pages/${target}/${target}.jsx`));
// const comps = mainNavbarItems.map((compList, index) => {
//   return { path: `/${compList.label.toLowerCase()}`, Component: dynamicImport };
// })

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={dashboardTheme}>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />}> 

        {/* Basic approach (without mapping methods */}
        {/* <Route path='authentication' element={<Authentication />} />
          <Route path='databases' element={<Databases />} />
          <Route path='storages' element={<Storages />} />
          <Route path='hosting' element={<Hosting />} />
          <Route path='functions' element={<Functions />} />
          <Route path='machine-learning' element={<MachineLearning />} /> */}
        {/* <Route path="*" element={<Navigate to="/authentication" />} />


          {/* First alternatice approach using mapping methods */}
          {mainNavbarItems.map( (item) => {
            const Components = dynamicImport(item.label);
            return (
              <Route
                key={item.id}
                path={item.route}
                element={<Components/>}
              />
            )
          })};

          {/* Fail attempt to try mapping methods */}
          {/* {pageList.map(({path, component: Components}, index) => (
            <Route 
            key={index}
            path={path} 
            element={<Components/>} 
            />
          ))}; */}

          {/* {route.map(({paths, Component}, index) => (
            <Route key={index} path={paths} element={<Component/>} />
          ))} */}

          {/* Unknown (need more further research) */}
          {/* {mainNavbarItems.map((myItem, index) => {
            <Route 
            path={myItem.route} 
            element={
            [
              <Authentication/>,
              <Databases/>,
              <Storages/>,
              <Hosting/>,
              <Functions/>,
              <MachineLearning/>
            ]
          }
            />
          })} */}

          {/* Second alternative to using mapping methods */}
          {/* {pages.map(({path, lazyComponent: Components}, index) => (
            <Route 
            key={index}
            path={path}
            element={<Components/>}
            />
          ))} */}

          {/* {mainNavbarItems.map((myItem, index) => {
            const Components = dynamicImport2(myItem.label);
            return (
              <Route
                key={myItem.id}
                path={`/${myItem.route}`}
                element={<Components/>}
              />
            )
          })} */}

        </Route>

      </Routes>

    </BrowserRouter>

  </ThemeProvider>
)