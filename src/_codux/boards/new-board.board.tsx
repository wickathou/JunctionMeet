import React from 'react'
import { createBoard } from '@wixc3/react-board';
import { Button } from 'react-bootstrap';

export default createBoard({
    name: 'New Board',
    Board: () => <div>
        <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
        <Button>Test</Button>
        <p>This is a paragraph.</p>
    </div>
});
