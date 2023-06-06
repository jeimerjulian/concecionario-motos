import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("moto/Moto");
export const apiCallSuccess = createAction("moto/Success");
export const apiCallFailed = createAction("moto/Failed");
