import { render,screen } from "@testing-library/react";
import NewTodo from "./NewTodo";
describe('testing suites', () => {
    test("trying to render",()=>{
        render(<NewTodo/>);
    
        const cont=screen.getByText('TodoText');
        expect(cont).toBeInTheDocument();
    });
 })