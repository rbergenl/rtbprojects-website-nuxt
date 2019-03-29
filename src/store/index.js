export const SET_USPS = 'SET_USPS';
export const SET_CERTIFICATES = 'SET_CERTIFICATES';
export const SET_SKILLS = 'SET_SKILLS';
export const SET_PROJECTS = 'SET_PROJECTS';

export const state = () => {
  return {
    usps: [],
    certificates: [],
    skills: [],
    projects: []
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
  }
}

export const actions = {
  loadHomepage (context) {
    const query = `
    {
      getHomepage {
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
        projects {
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
      }
    }
    `
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: query }),
    })
    .then(res => res.json())
    .then(res => {
      context.commit('SET_USPS', res.data.getHomepage.usps)
      context.commit('SET_CERTIFICATES', res.data.getHomepage.certificates)
      context.commit('SET_SKILLS', res.data.getHomepage.skills)
      context.commit('SET_PROJECTS', res.data.getHomepage.projects)
      return res;
    })
    //.then(res => console.log(res))
    .catch(err => console.log(err));
  }
}
