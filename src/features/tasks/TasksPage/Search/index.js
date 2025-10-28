import Input from "../../Input"
import { useQueryParametr, useReplaceQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";


export default () => {
    const query = useQueryParametr(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

        return (
            <Wrapper>
                <Input
                    placeholder="Filtruj zadania"
                    value={query || ""}
                    onChange={onInputChange}
                />
            </Wrapper>
        )
    };