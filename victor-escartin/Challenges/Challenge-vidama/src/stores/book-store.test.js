import bookStore from "./book-store";
import actionTypes from "./../actions/action-types";
import dispatcher from "./../dispatcher/dispatcher";


describe("Book Store", () => {

  let action;
  let mockCallbackFunction;

  beforeEach(() => {
    mockCallbackFunction = jest.fn();
    bookStore.addEventListener(mockCallbackFunction);
  });

  afterEach(() => {
    bookStore.removeEventListener(mockCallbackFunction);
    bookStore.setBook(undefined);
    bookStore.setBooks(undefined);
  });

  it("should exist", () => {
    expect(bookStore).toBeDefined();
  });

  it(" should load book ", () => {
    action = {
      type: actionTypes.LOAD_BOOK,
      payload: { id: 1, title: "The Help" },
    };
    dispatcher.dispatch(action);
    expect(bookStore.getBook()).toEqual(action.payload);
  });

  it(" should load a list of books", () => {
    action = {
      type: actionTypes.LOAD_BOOKS,
      payload: {items:[{ id: 1, title: "The Help" },{ id: 2, title: "Locked On" }]}
    };
    dispatcher.dispatch(action);
    expect(bookStore.getBooks()).toEqual(action.payload);
  });

  it(" should load a user", () => {
    action = {
      type: actionTypes.LOAD_USERS,
      payload: {id: 1, user: "David"}
    };
    dispatcher.dispatch(action);
    expect(bookStore.getUsers()).toEqual(action.payload);
  });

  it("should use the default case when the action type does not exist", () => {
    const bookListMock=[{ id: 1, title: "The Help" },{id:2, title:"hello"}];
    bookStore.setBooks(bookListMock);

    action = {
      type: actionTypes.DELETE_BOOKS,
      payload: { id: 1, title: "The Help" },
    };
    dispatcher.dispatch(action);
    expect(bookStore.getBooks()).toEqual(bookListMock) ;
  });
});



