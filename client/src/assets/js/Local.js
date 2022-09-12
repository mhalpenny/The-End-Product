function getInitialState() {
    var selectedOption = localStorage.getItem( 'SelectedOption' ) || 1;

    return {
        selectedOption: selectedOption
    };
}

function setLocalState( option ) {
    localStorage.setItem( 'SelectedOption', option );
    this.setState( { selectedOption: option } );
}

export {getInitialState, setLocalState}