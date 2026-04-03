import { ref } from 'vue'

const aboutData = {
  name: 'Hadinata Jenta',
  bio: 'Fullstack Developer with 3+ years of professional and internship experience, focused on backend development, distributed systems, and scalable architecture. Experienced in building microservices with Go and Laravel, optimizing database performance, and integrating services across high-traffic financial environments at Bank Rakyat Indonesia.',
  skills: [
    'PHP', 'Go', 'JavaScript', 'Python', 'Kotlin', 'C++',
    'Laravel', 'Express.js', 'Vue.js', 'Gin/Echo', 'React Native',
    'MySQL', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes',
    'RabbitMQ', 'Red Hat OpenShift', 'CI/CD'
  ],
  profileImage: '/img/5357.jpg'
}

// Global singleton state
const name = ref(aboutData.name)
const bio = ref(aboutData.bio)
const skills = ref(aboutData.skills)
const profileImage = ref(aboutData.profileImage)

/**
 * Composable for managing about me data
 */
export function useAboutData() {
  return {
    name,
    bio,
    skills,
    profileImage
  }
}
