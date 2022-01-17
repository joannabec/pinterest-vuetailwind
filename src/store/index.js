import infoCards from './data';

const cardsModule = {
  state() {
    return { infoCards, selectedCards: [] };
  },
  mutations: {
    showCards(state, payload) {
      state.selectedCards = payload;
    }
  },
  actions: {
    filterCards(context, payload) {
      if (payload.type === 'all') context.commit('showCards', context.getters.allCards);
      else if (payload.type === 'filter') {
        const allCards = context.getters.allCards;
        const filtered = allCards.filter(item => item.keywords.includes(payload.term));
        context.commit('showCards', filtered);
      }
    }
  },
  getters: {
    allCards(state) {
      return state.infoCards;
    },
    selectedCards(state) {
      return state.selectedCards;
    }
  },
};

export default cardsModule;
