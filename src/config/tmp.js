class ExampleComponent extends React.Component {
  gimmeNope() {
    const thisDoesNotWork = 'nope';
    return thisDoesNotWork
  }
  render() {
    return <div>'YODA' `${gimmeNope()}`</div>
  }
}