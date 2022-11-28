import React from 'react';
import renderer from 'react-test-renderer';// import '@testing-library/jest-dom'
import NoteButton from '../components/FretBoard/NoteButton';
// import FretBoard from '../components/FretBoard/FretBoard';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectRoot, getRoot, getRawRoot } from '../features/groupSelector/groupSelectorSlice';
import { Scale } from '@tonaljs/tonal'
// import {render, fireEvent, renderer, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

describe('test note buttons', ()=>{
    // const areScales = useSelector(state => state.groupSelector.areScales)
    // const selectedGroup =  useSelector(state => state.groupSelector.selectedChord)
    // const dispatch = useDispatch()
    // const root = useSelector(state => state.groupSelector.root)
    it('changes class to root when clicked', ()=>{
        // const thisBtn = <NoteButton thisNote={'E2'} grouping ={ Scale }/>
        // thisBtn.handleClick()

        // expect(newRoot).toBe('E2')
        const onClick = jest.fn()

        //test component instance
        const testNoteButton = renderer.create(
            <NoteButton thisNote={'E2'} grouping ={ Scale }/>
        );
        // let tree = testNoteButton.toJSON();
        // expect(tree).toMatchSnapshot();

        renderer.act(()=>{
            testNoteButton.props.handleClick()
        })        // // let newRoot = dispatch(getRoot)

        // expect(root).toBe('E2')
        expect(testNoteButton.props.testClick).toBe(true)

    })
})
