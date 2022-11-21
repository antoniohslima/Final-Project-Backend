import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Manager from '../models/Manager';
import Client from '../models/Client';
import CardNetwork from '../models/CardNetwork';
import Card from '../models/Card';
import ClientCard from '../models/ClientCard';
import ManagerAccessLogs from '../models/ManagerAccessLogs';

const models = [Manager, Client, CardNetwork, Card, ClientCard, ManagerAccessLogs];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

export default connection;
