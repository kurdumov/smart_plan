import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { appPages, authPages } from '../config/pages.config';
import NotFoundPage from '../pages/NotFound.page';
import LoginPage from '../pages/Login.page';

const ProfilePage = lazy(() => import('../pages/Profile.page'));
const MainPage = lazy(() => import('../pages/main/Main.page.tsx'));
const SalesPage = lazy(() => import('../pages/sales/Sales.page.tsx'));
const ForecastPage = lazy(() => import('../pages/forecast/Forecast.page.tsx'));

const contentRoutes: RouteProps[] = [
	{
		path: appPages.main.to,
		element: <MainPage />,
	},
	{
		path: appPages.sales.to,
		element: <SalesPage />,
	},
	{
		path: appPages.forecast.to,
		element: <ForecastPage />,
	},
	{ path: authPages.loginPage.to, element: <LoginPage /> },
	{ path: authPages.profilePage.to, element: <ProfilePage /> },
	{ path: '*', element: <NotFoundPage /> },
];

export default contentRoutes;
