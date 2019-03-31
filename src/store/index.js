export const SET_USPS = 'SET_USPS';
export const SET_CERTIFICATES = 'SET_CERTIFICATES';
export const SET_SKILLS = 'SET_SKILLS';
export const SET_PROJECTS = 'SET_PROJECTS';
export const SET_TESTIMONIALS = 'SET_TESTIMONIALS';

export const state = () => {
  return {
    usps: [],
    certificates: [],
    skills: [],
    projects: [],
    testimonials: []
  }
}

export const getters = {
  usps (state) {
    return state.usps
  },
  certificates (state) {
    return state.certificates
  },
  skills (state) {
    return state.skills
  },
  projects (state) {
    return state.projects
  },
  testimonials (state) {
    return state.testimonials
  }
}

export const mutations = {
  [SET_USPS] (state, payload) {
    state.usps = payload;
  },
  [SET_CERTIFICATES] (state, payload) {
    state.certificates = payload;
  },
  [SET_SKILLS] (state, payload) {
    state.skills = payload;
  },
  [SET_PROJECTS] (state, payload) {
    state.projects = payload;
  },
  [SET_TESTIMONIALS] (state, payload) {
    state.testimonials = payload;
  }
}

export const actions = {
  loadHomepage (context) {
    const query = `
    {

        usps {
          text
          title
          icon
        }
        certificates {
          title
          img_url
        }
        skills {
          category
          title
          knowledge
          experience
        }
        projects (orderBy: year_DESC) {
          id
          title
          type
          year
          company
          img_url
          checkmarks
          paragraphs {
            text
            footer
          }
        }
        testimonials (orderBy: order_ASC) {
          text
          name
        }
    }
    `
    let base = '';
    if (process.env.NODE_ENV === 'development') {
      base = 'http://localhost:4000';
    }
    fetch(base + '/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: query }),
    })
    .then(res => res.json())
    .then(res => {
      context.commit('SET_USPS', res.data.usps)
      context.commit('SET_CERTIFICATES', res.data.certificates)
      context.commit('SET_SKILLS', res.data.skills)
      context.commit('SET_PROJECTS', res.data.projects)
      context.commit('SET_TESTIMONIALS', res.data.testimonials)
      return res;
    })
    //.then(res => console.log(res))
    .catch(err => console.log(err));
  }
}
