import { ref } from 'vue'

const aboutData = {
  name: 'Hadinata Jenta',
  bio: 'Fullstack Developer focused on backend development, distributed systems, and scalable architecture with 6+ years of experience. Experienced in building microservices with Go, Laravel, and Node.js, optimizing database performance, and integrating services across high-traffic environments. Hands-on experience with financial-grade systems at BRI that required secure coding, structured QA cycles, and reliable release processes.',
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
