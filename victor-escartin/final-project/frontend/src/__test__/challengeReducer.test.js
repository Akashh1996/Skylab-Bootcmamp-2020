import {
  challengeCreateReducer,
  challengeDetailsReducer,
  challengeListReducer,
  deleteChallengeReducer,
} from '../redux/reducers/challengeReducer';
import actionTypes from '../redux/actions/actionTypes';

describe('challengeCreateReducer', () => {
  test('should return the initial state', () => {
    expect(challengeCreateReducer(undefined, {})).toEqual({});
  });

  test('should handle CHALLENGE_CREATE_REQUEST', () => {
    expect(
      challengeCreateReducer({}, {
        type: actionTypes.CHALLENGE_CREATE_REQUEST,
      }),
    ).toEqual(
      { loading: true },
    );
  });

  test('should handle CHALLENGE_CREATE_SUCCESS', () => {
    expect(
      challengeCreateReducer({ challenges: [] }, {
        type: actionTypes.CHALLENGE_CREATE_SUCCESS,
        newChallenge: {
          loading: false,
          success: true,
          challenge: {},
        },
      }),
    ).toEqual(
      {
        loading: false,
        success: true,
        challenge: [{
          loading: false,
          success: true,
          challenge: {},
        }],
      },
    );
  });

  test('should handle CHALLENGE_CREATE_FAIL', () => {
    expect(
      challengeCreateReducer({ _id: '1', title: 'title' }, {
        type: actionTypes.CHALLENGE_CREATE_FAIL,
      }),
    ).toEqual(
      {
        loading: false,
        error: undefined,
      },
    );
  });

  test('should handle CHALLENGE_CREATE_REQUEST', () => {
    expect(
      challengeCreateReducer({ _id: '1', title: 'title' }, {
        type: actionTypes.CHALLENGE_CREATE_RESET,
      }),
    ).toEqual(
      {},
    );
  });

  describe('challengeListReducer', () => {
    test('should return the initial state', () => {
      expect(challengeListReducer(undefined, [])).toEqual({ challenges: [], loading: true });
    });

    test('should handle CHALLENGE_LIST_REQUEST', () => {
      expect(
        challengeListReducer({}, {
          type: actionTypes.CHALLENGE_LIST_REQUEST,
        }),
      ).toEqual(
        { loading: true },
      );
    });

    test('should handle CHALLENGE_LIST_SUCCESS', () => {
      expect(
        challengeListReducer({ loading: true, challenges: [{}] }, {
          type: actionTypes.CHALLENGE_LIST_SUCCESS,
        }),
      ).toEqual({
        loading: false,
        challenges: undefined,
      });
    });

    test('should handle CHALLENGE_LIST_FAIL', () => {
      expect(
        challengeListReducer({ _id: '1', title: 'title' }, {
          type: actionTypes.CHALLENGE_LIST_FAIL,
        }),
      ).toEqual(
        {
          loading: false,
          challenges: undefined,
        },
      );
    });
  });

  describe('challengeDetailsReducer', () => {
    test('should return the initial state', () => {
      expect(challengeDetailsReducer(undefined, {})).toEqual({ loading: true });
    });

    test('should handle CHALLENGE_DETAILS_REQUEST', () => {
      expect(
        challengeDetailsReducer({}, {
          type: actionTypes.CHALLENGE_DETAILS_REQUEST,
        }),
      ).toEqual(
        { loading: true },
      );
    });

    test('should handle CHALLENGE_DETAILS_SUCCESS', () => {
      expect(
        challengeDetailsReducer({ loading: true }, {
          type: actionTypes.CHALLENGE_DETAILS_SUCCESS,
        }),
      ).toEqual({
        loading: false,
        challenges: undefined,
      });
    });

    test('should handle CHALLENGE_DETAILS_FAIL', () => {
      expect(
        challengeDetailsReducer({ _id: '1', title: 'title' }, {
          type: actionTypes.CHALLENGE_DETAILS_FAIL,
        }),
      ).toEqual(
        {
          loading: false,
          challenges: undefined,
        },
      );
    });
  });

  describe('deleteChallengeReducer', () => {
    test('should return the initial state', () => {
      expect(deleteChallengeReducer(undefined, {})).toEqual({ loading: true });
    });

    test('should handle CHALLENGE_DELETE_REQUEST', () => {
      expect(
        deleteChallengeReducer({}, {
          type: actionTypes.CHALLENGE_DELETE_REQUEST,
        }),
      ).toEqual(
        { loading: true },
      );
    });

    test('should handle CHALLENGE_DELETE_SUCCESS', () => {
      expect(
        deleteChallengeReducer({ loading: true }, {
          type: actionTypes.CHALLENGE_DELETE_SUCCESS,
        }),
      ).toEqual({
        loading: false,
        challenges: undefined,
      });
    });

    test('should handle CHALLENGE_DELETE_FAIL', () => {
      expect(
        deleteChallengeReducer({ _id: '1', title: 'title' }, {
          type: actionTypes.CHALLENGE_DELETE_FAIL,
        }),
      ).toEqual(
        {
          loading: false,
          challenges: undefined,
        },
      );
    });
  });
});
