import {
  fireEvent,
  render,
  waitFor,
  screen,
  getByRole,
  getByPlaceholderText,
  getByText,
  getByLabelText,
} from "@testing-library/react";
import App from "./App";
import TaskBar from "./components/TaskBar.component";
import Assignment from "./pages/Assignment";
test("renders front page", () => {
  render(<App />);
  const feedbackElement = screen.getByText(/Feedback/i);
  const assignmentElement = screen.getByText(/Assignment/i);
  const aboutUsElement = screen.getByText(/About us/i);
  const signUpElement = screen.getByText(/Signup/i);
  const loginElement = screen.getByText(/Login/i);
  expect(feedbackElement).toBeInTheDocument();
  expect(assignmentElement).toBeInTheDocument();
  expect(aboutUsElement).toBeInTheDocument();
  expect(signUpElement).toBeInTheDocument();
  expect(loginElement).toBeInTheDocument();
});

test("renders task bar test", () => {
  render(<TaskBar name="test" content="test content" />);

  const taskBarName = screen.getByText("test");
  const taskBarContent = screen.getByText("test content");

  expect(taskBarName).toBeInTheDocument();
  expect(taskBarContent).toBeInTheDocument();

  screen.debug();
});

test("renders assignment test", () => {
  render(<Assignment />);
  const inputTitle = screen.getByLabelText(/Title:/i);
  const inputDescription = screen.getByLabelText(/Description:/i);

  expect(inputTitle).toBeInTheDocument();
  expect(inputDescription).toBeInTheDocument();

  fireEvent.change(inputTitle, { target: { value: "" } });
  fireEvent.change(inputDescription, {
    target: { value: "test input content" },
  });
  screen.debug();
});
