import {Container} from "./styles";
import {Table} from "../../components/Table";
import {Filters} from "../../components/Filters";

export function Dashboard(){
    return (
        <Container>
            <Filters/>
            <Table/>
        </Container>
    )
}