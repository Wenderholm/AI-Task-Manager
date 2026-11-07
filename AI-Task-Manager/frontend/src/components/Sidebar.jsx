import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  Sparkles,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <Sparkles size={25} />
        <span>TaskFlow AI</span>
      </div>

      <p className="menu-label">MENU</p>

      <nav>
        <a className="nav-item active" href="#">
          <LayoutDashboard size={19} />
          Dashboard
        </a>

        <a className="nav-item" href="#">
          <CheckSquare size={19} />
          My Tasks
        </a>

        <a className="nav-item" href="#">
          <CalendarDays size={19} />
          Calendar
        </a>

        <a className="nav-item" href="#">
          <Sparkles size={19} />
          AI Assistant
        </a>
      </nav>

      <div className="sidebar-bottom">
        <a className="nav-item" href="#">
          <Settings size={19} />
          Settings
        </a>

        <a className="nav-item" href="#">
          <LogOut size={19} />
          Logout
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
