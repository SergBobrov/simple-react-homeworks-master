import React from 'react';
import {
    homeWorkReducer,
    PeopleStateType,
    SortPeople18MoreAC,
    SortPeopleUpAC
} from "../homeWorkReducer";

let initialState: PeopleStateType;

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, SortPeopleUpAC("up"));

    console.log(newState);
    expect(newState[0].name).toBe('Александр');
});

test("sort name down", () => {
    const newState = homeWorkReducer(initialState, SortPeopleUpAC("down"));

    expect(newState[initialState.length - 1].name).toBe('Александр')
});

test("check age 18", () => {
    const newState = homeWorkReducer(initialState, SortPeople18MoreAC());

    expect(newState.length).toBe(4)

});
