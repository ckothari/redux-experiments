import React from 'react'
import { connect } from 'react-redux'
import {fetchCardData} from '../actions'


class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, cardId } = this.props;
    dispatch(fetchCardData(cardId));
  }

  render() {
    let {
          isFetching,
          hasError,
          data
    } = this.props;
    debugger;
    return <div>
      {'isFetching: ' + isFetching + ' | '}
      {'hasError: ' + hasError + ' | '}
      {data.join('-')}
    </div>
  }

}

const mapStateToProps = ({dashboard}, ownProps) => {
  let cardId = ownProps.cardId;
  return { ...dashboard[cardId] }
};


Card = connect(
  mapStateToProps
)(Card);

export default Card;
