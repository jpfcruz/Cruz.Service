import { Express } from 'express';

export type IRouteModule = (express: Express) => void;
