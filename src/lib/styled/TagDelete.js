import styled from "styled-components";

const TagDelete = styled.span.attrs((props) => ({
  "data-test": `tag-delete-${props.index}`,
}))`
    color: white;
    padding:1px
    font-size: 1em;
    &:hover {
        color: red;
    }
`;

export default TagDelete;
