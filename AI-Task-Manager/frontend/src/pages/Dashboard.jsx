import { useEffect, useState } from "react";

import { CheckCircle, Clock, ListTodo, AlertCircle, Plus } from "lucide-react";

import api from "../services/api";
import StatCard from "../components/StatCard";
import TaskList from "../components/TaskList";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        await api.get("csrf/");

        const response = await api.get("tasks/");

        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);

        if (error.response?.status === 403) {
          setError("CSRF error. Refresh the page and try again.");
        } else if (error.response?.status === 401) {
          setError("You must log in to view your tasks.");
        } else {
          setError("Could not connect to the server.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const completed = tasks.filter((task) => task.status === "DONE").length;

  const inProgress = tasks.filter(
    (task) => task.status === "IN_PROGRESS",
  ).length;

  const overdue = tasks.filter(
    (task) =>
      task.due_date &&
      new Date(task.due_date) < new Date() &&
      task.status !== "DONE",
  ).length;

  return (
    <main className="dashboard">
      <header className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's your productivity overview.</p>
        </div>
      </header>

      <section className="stats-grid">
        <StatCard
          title="Total Tasks"
          value={tasks.length}
          subtitle="All your tasks"
          icon={ListTodo}
        />

        <StatCard
          title="Completed"
          value={completed}
          subtitle="Tasks finished"
          icon={CheckCircle}
        />

        <StatCard
          title="In Progress"
          value={inProgress}
          subtitle="Currently working"
          icon={Clock}
        />

        <StatCard
          title="Overdue"
          value={overdue}
          subtitle="Need your attention"
          icon={AlertCircle}
        />
      </section>

      <section className="content-card">
        <div className="section-header">
          <h2>Recent Tasks</h2>
          <span>{tasks.length} tasks</span>
        </div>

        <TaskList tasks={tasks} loading={loading} error={error} />
      </section>
    </main>
  );
}

export default Dashboard;
