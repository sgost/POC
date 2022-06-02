import {
    render,
    screen,
    fireEvent,
} from "@testing-library/react";
import Todo from "../todo"


test('test', () => {
    expect(true).toBe(true)
})

test('Used to Find the button in the above component', async () => {
    render(<Todo />);
    const approve = await screen.getByText(/Primary Button/);
    expect(approve).toBeInTheDocument();
})


test('For button Click event', async () => {
    render(<Todo />);
    const approve = await screen.getByText(/Primary Button/);
    expect(approve).toBeInTheDocument();
    fireEvent.click(approve);
})



