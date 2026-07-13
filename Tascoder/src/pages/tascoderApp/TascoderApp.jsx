import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import "../../../public/light.css";
import dateIcon from "../../assets/dateIcon.png";
import { useState, useEffect } from "react";

export default function TascoderApp() {
  const [date, setDate] = useState("");
  const [reminderDate, setReminderDate] = useState("");
  const [taskText, setTaskText] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [view, setView] = useState("tasks");

  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("tscTasks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleDateChange = (e) => setDate(e.target.value);
  const handleReminderChange = (e) => setReminderDate(e.target.value);
  const handleTaskTextChange = (e) => setTaskText(e.target.value);
  const handleImportantChange = (e) => setIsImportant(e.target.checked);

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}.${month}.${year}.`;
  }

  function getTodayFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    return `${day}.${month}.${now.getFullYear()}.`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      date,
      reminder: reminderDate,
      important: isImportant,
      finished: false,
      createdAt: getTodayFormatted(),
    };

    setTasks((prev) => [...prev, newTask]);
    setTaskText("");
    setDate("");
    setReminderDate("");
    setIsImportant(false);
  };

  const handleDelete = (id) =>
    setTasks((prev) => prev.filter((task) => task.id !== id));

  const handleFinish = (id) =>
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, finished: !task.finished } : task,
      ),
    );

  function tscHideBtnHandler() {
    const tscHideBtn = document.getElementById("tscHideBtn");
    const tscSidebar = document.getElementById("tscAppSidebar");
    const tscLeftHolder = document.getElementById("tscLeftsideHolder");
    const currentRotation = parseFloat(tscHideBtn.dataset.rotation ?? 0);
    const newRotation = currentRotation + 180;
    tscHideBtn.style.transform = `rotate(${newRotation}deg)`;
    tscHideBtn.dataset.rotation = newRotation;

    const isSidebarOpen = tscSidebar.dataset.open === "true";
    tscSidebar.style.left = isSidebarOpen ? "-310px" : "64px";
    tscSidebar.dataset.open = !isSidebarOpen;
    tscLeftHolder.style.width = isSidebarOpen ? "66px" : "302px";
    tscLeftHolder.dataset.open = !isSidebarOpen;
  }

  useEffect(() => {
    localStorage.setItem("tscTasks", JSON.stringify(tasks));
  }, [tasks]);

  const visibleTasks = tasks.filter((task) => {
    if (view === "tasks") return !task.finished;
    if (view === "important") return task.important && !task.finished;
    if (view === "finished") return task.finished;
    return true;
  });

  return (
    <>
      <MainHeader></MainHeader>
      <section id="tscAppSection">
        <div id="tscLeftsideHolder" data-open="true">
          <div id="tscAppSidebar" data-open="true">
            <menu>
              <li>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="27"
                    viewBox="0 0 36 27"
                    fill="none"
                  >
                    <line
                      x1="1.04871"
                      y1="13.8572"
                      x2="13.0539"
                      y2="25.8521"
                      stroke="black"
                    />
                    <line
                      x1="0.349527"
                      y1="13.9982"
                      x2="4.68338"
                      y2="9.84879"
                      stroke="black"
                    />
                    <line
                      x1="31.0489"
                      y1="0.357384"
                      x2="35.6097"
                      y2="4.91822"
                      stroke="black"
                    />
                    <line
                      x1="4.04887"
                      y1="9.85738"
                      x2="13.0489"
                      y2="18.8574"
                      stroke="black"
                    />
                    <path
                      d="M12.6953 19.2109L31.2362 0.883598"
                      stroke="black"
                    />
                    <path d="M12.6953 26.2109L35.3917 4.44835" stroke="black" />
                  </svg>
                </div>
                <a
                  href=""
                  className={`tscAppSideLinks${view === "tasks" ? " tscActiveSideLink" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setView("tasks");
                  }}
                >
                  Tasks
                </a>
              </li>
              <li>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="18"
                    viewBox="0 0 32 31"
                    fill="none"
                  >
                    <path
                      d="M15.7571 0.5L20.2837 10.3117L31.0142 11.5848L23.0808 18.9202L25.1867 29.5194L15.7571 24.2417L6.3275 29.5208L8.43333 18.9217L0.5 11.5833L11.2319 10.3102L15.7571 0.5Z"
                      stroke="black"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <a
                  href=""
                  className={`tscAppSideLinks${view === "important" ? " tscActiveSideLink" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setView("important");
                  }}
                >
                  Important
                </a>
              </li>
              <li>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="25"
                    viewBox="0 0 19 25"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.49937 1.25C4.95203 1.25 1.26603 4.88748 1.26603 9.37496C1.26603 12.7525 3.35477 15.6493 6.327 16.8749H6.33333V16.8774C7.33691 17.2892 8.41316 17.5007 9.5 17.4999C10.5869 17.5005 11.6631 17.2887 12.6667 16.8768V16.8749H12.6717C15.644 15.6493 17.7327 12.7525 17.7327 9.37496C17.7327 4.88748 14.0467 1.25 9.49937 1.25ZM13.9333 17.6687C16.9461 16.0956 19 12.9718 19 9.37496C19 4.19748 14.7465 0 9.5 0C4.25347 0 0 4.19748 0 9.37496C0 12.9725 2.0539 16.0974 5.0673 17.6687V24.3749C5.06728 24.4881 5.09839 24.5991 5.15731 24.6962C5.21623 24.7932 5.30075 24.8727 5.40185 24.9261C5.50295 24.9795 5.61684 25.0048 5.73136 24.9993C5.84589 24.9938 5.95675 24.9577 6.05213 24.8949L9.5 22.6262L12.9485 24.8949C13.0439 24.9577 13.1547 24.9938 13.2693 24.9993C13.3838 25.0048 13.4977 24.9795 13.5988 24.9261C13.6999 24.8727 13.7844 24.7932 13.8433 24.6962C13.9022 24.5991 13.9334 24.4881 13.9333 24.3749V17.6687ZM12.6667 18.2162C11.6495 18.5702 10.5786 18.7507 9.5 18.7499C8.38977 18.7499 7.3245 18.5624 6.33397 18.2168V23.2074L9.14913 21.3549C9.25321 21.2864 9.37552 21.2498 9.50063 21.2498C9.62575 21.2498 9.74806 21.2864 9.85213 21.3549L12.6667 23.2074V18.2162ZM9.5 4.99998C8.91781 4.99998 8.34131 5.11314 7.80344 5.33301C7.26556 5.55287 6.77683 5.87513 6.36516 6.28138C5.95349 6.68764 5.62693 7.16993 5.40413 7.70073C5.18134 8.23153 5.06667 8.80043 5.06667 9.37496C5.06667 9.9495 5.18134 10.5184 5.40413 11.0492C5.62693 11.58 5.95349 12.0623 6.36516 12.4685C6.77683 12.8748 7.26556 13.1971 7.80344 13.4169C8.34131 13.6368 8.91781 13.7499 9.5 13.7499C10.6758 13.7499 11.8034 13.289 12.6348 12.4685C13.4663 11.6481 13.9333 10.5353 13.9333 9.37496C13.9333 8.21465 13.4663 7.10185 12.6348 6.28138C11.8034 5.46092 10.6758 4.99998 9.5 4.99998ZM3.8 9.37496C3.8 7.88313 4.40053 6.45239 5.46949 5.3975C6.53845 4.34262 7.98827 3.74999 9.5 3.74999C11.0117 3.74999 12.4616 4.34262 13.5305 5.3975C14.5995 6.45239 15.2 7.88313 15.2 9.37496C15.2 10.8668 14.5995 12.2975 13.5305 13.3524C12.4616 14.4073 11.0117 14.9999 9.5 14.9999C7.98827 14.9999 6.53845 14.4073 5.46949 13.3524C4.40053 12.2975 3.8 10.8668 3.8 9.37496Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <a
                  href=""
                  className={`tscAppSideLinks${view === "finished" ? " tscActiveSideLink" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setView("finished");
                  }}
                >
                  Finished
                </a>
              </li>
            </menu>
          </div>
          <ul id="tscSettingsHolder">
            <li></li>
            <li>
              <button
                className="tscSettingsBtns"
                id="tscHideBtn"
                onClick={tscHideBtnHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_691_30)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.93868 13.0609C7.65778 12.7796 7.5 12.3984 7.5 12.0009C7.5 11.6034 7.65778 11.2221 7.93868 10.9409L13.5947 5.28288C13.8761 5.00161 14.2577 4.84366 14.6555 4.84375C14.8525 4.8438 15.0476 4.88264 15.2296 4.95808C15.4116 5.03351 15.5769 5.14404 15.7162 5.28338C15.8554 5.42271 15.9659 5.58811 16.0413 5.77013C16.1166 5.95215 16.1554 6.14723 16.1553 6.34423C16.1553 6.54123 16.1164 6.73629 16.041 6.91828C15.9655 7.10026 15.855 7.26561 15.7157 7.40488L11.1207 12.0009L15.7167 16.5969C15.86 16.7352 15.9744 16.9006 16.0531 17.0836C16.1318 17.2666 16.1732 17.4634 16.1751 17.6626C16.1769 17.8617 16.139 18.0593 16.0637 18.2436C15.9883 18.428 15.877 18.5955 15.7363 18.7365C15.5955 18.8774 15.4281 18.9888 15.2438 19.0643C15.0595 19.1398 14.862 19.1779 14.6628 19.1762C14.4636 19.1746 14.2668 19.1333 14.0837 19.0548C13.9007 18.9763 13.7351 18.8621 13.5967 18.7189L7.93668 13.0609H7.93868Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_691_30">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div id="tscAppLayout">
          <h2>
            {
              {
                tasks: "Dashboard",
                important: "Important",
                finished: "Finished",
              }[view]
            }
          </h2>
          {view === "tasks" && (
            <form id="tscForm" onSubmit={handleSubmit}>
              <div id="tscNewTaskHolder">
                <label htmlFor="tscNewTask">New task</label>
                <textarea
                  id="tscNewTask"
                  maxLength="250"
                  value={taskText}
                  onChange={handleTaskTextChange}
                ></textarea>
              </div>
              <div id="tscDIRholder">
                <div id="tscDIRholderFirstDate">
                  <div className="labelInputHolder">
                    <label htmlFor="tscTaskDate" id="tscDateLabel">
                      date
                    </label>
                    <input
                      type="date"
                      id="tscTaskDate"
                      value={date}
                      onChange={handleDateChange}
                    />
                  </div>
                  <img
                    src={dateIcon}
                    alt=""
                    className="tscDIRholderFirstDateImg"
                  />
                  <p className="tscChosenDate">{date ? formatDate(date) : ""}</p>
                </div>
                <div id="tscDIRholderReminder">
                  <div className="labelInputHolder">
                    <label htmlFor="tscReminder" id="tscReminderLabel">
                      reminder
                    </label>
                    <input
                      type="date"
                      id="tscReminder"
                      value={reminderDate}
                      onChange={handleReminderChange}
                    />
                  </div>
                  <img
                    src={dateIcon}
                    alt=""
                    className="tscDIRholderFirstDateImg"
                  />
                  <p className="tscChosenDate">
                    {reminderDate ? formatDate(reminderDate) : ""}
                  </p>
                </div>
                <div id="tscDIRholderImportant">
                  <label htmlFor="tscImportantBtn" id="tscImportantLabel">
                    important
                  </label>
                  <input
                    type="checkbox"
                    id="tscImportantBtn"
                    checked={isImportant}
                    onChange={handleImportantChange}
                  />
                </div>
              </div>
              <button id="tscSubmitBtn" disabled={!taskText.trim()}>
                +
              </button>
            </form>
          )}
          <div id="tscTaskElementListHolder">
            <ul>
              {visibleTasks.map((task) => (
                <li
                  key={task.id}
                  className={`tscTaskCard${task.finished ? " tscFinishedTask" : ""}${task.important ? " tscImportantTask" : ""}`}
                >
                  <p className="tscTaskDescriptionText">
                    {task.important && (
                      <span className="tscImportantStar">★ </span>
                    )}
                    {task.text}
                  </p>
                  <div className="tscDateTscDeleteHolder">
                    <div className="tscDateReminderHolder">
                      <p>
                        <strong>Created:</strong> {task.createdAt}
                      </p>
                      {task.date && (
                        <>
                          <span>|</span>
                          <p>
                            <strong>Due:</strong> {formatDate(task.date)}
                          </p>
                        </>
                      )}
                      {task.reminder && (
                        <>
                          <span>|</span>
                          <p>
                            <strong>Reminder:</strong>{" "}
                            {formatDate(task.reminder)}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="tscDeleteFinishBtnHolder">
                      <button
                        type="button"
                        onClick={() => handleDelete(task.id)}
                      >
                        delete
                      </button>
                      <button
                        type="button"
                        onClick={() => handleFinish(task.id)}
                      >
                        {task.finished ? "undo" : "finish"}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
