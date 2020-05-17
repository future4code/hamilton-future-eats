import { setCurrentPage, setSearch } from '../actions/page'


describe ("Page Actions", () => {
    test("Set Current Page", () => {
        //preparação
        const mockSetCurrentPage = "Página selecionada"

        //execução
        const action = setCurrentPage(mockSetCurrentPage);

        //verificação
        expect(action.type).toBe("SET_CURRENT_PAGE");
        expect(action.payload.currentPage).toBe(mockSetCurrentPage)

    })
    test("Set Search", () => {
        //preparação
        const mockSearch = "Sou uma pesquisa"

        //execução
        const action = setSearch(mockSearch);

        //verificação
        expect(action.type).toBe("SET_SEARCH");
        expect(action.payload.currentSearch).toBe(mockSearch)
    })
})