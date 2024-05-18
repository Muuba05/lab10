// pages/index.js

import Layout from '../components/Layout';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';

const Home = () => {
  return (
    <Layout>
      <AddTaskForm />
      <TaskList />
    </Layout>
  );
};

export default Home;

