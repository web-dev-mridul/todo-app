import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div className="bg-[#c7d1dd] border h-150 mx-[25%] mt-5 px-20 py-5">
      <Header />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
