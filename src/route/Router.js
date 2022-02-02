import React from "react";
// import axios from "axios";
// import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListTripsPage from "../pages/ListTripsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const Router = () => {
  return (
    <div>
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <HomePage />
          </Route>
          <Route exact path={"/trips/list"}>
            <ListTripsPage />
          </Route>
          <Route exact path={"/trips/application"}>
            <ApplicationFormPage />
          </Route>
          <Route exact path={"/login"}>
            <LoginPage />
          </Route>
          <Route exact path={"/admin/trips/list"}>
            <AdminHomePage />
          </Route>
          <Route exact path={"/admin/trips/create"}>
            <CreateTripPage />
          </Route>
          <Route exact path={"/admin/trips/:id"}>
            <TripDetailsPage />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default Router;
