export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  year?: string;
  demo?: string;
  videoLink?: string;
  videoPreview?: string;
}

export const allProjects: Project[] = [
  {
    title: 'Surgical Tool Sorter',
    description: 'Developed a 6-DOF robotic arm modelled after the UR3e with computer vision for object recognition and precise manipulation. Implemented inverse kinematics and path planning algorithms.',
    image: '/images/sorterImg.webp',
    tags: ['ROS2', 'Python', 'Gazebo', 'Computer Vision', 'Kinematics'],
    github: 'https://github.com',
    videoLink: 'https://youtu.be/nKqrXEbL_lo',
    videoPreview: 'https://youtu.be/nKqrXEbL_lo',
    year: '2025'
  },
  {
    title: 'Mario RL Agent',
    description: 'Implemented DQN and Double DQN agents for Super Mario Bros with a custom reward function based on forward motion, time, and failure. Trained and evaluated both agents under identical conditions and compared learning behavior over extended runs, with Double DQN showing faster level completion and more stable performance.',
    image: '/images/MarioImg.webp',
    tags: ['Python', 'Reinforcement Learning', 'Deep Q-Networks', 'OpenAI Gym', 'Reward Shaping'],
    github: 'https://github.com',
    videoLink: 'https://www.youtube.com/watch?v=5S9ulZPc72o&list=PL_2fSCerUn3hEGYHUvj801nfrgnDc81in&pp=gAQB0gcJCbEEOCosWNin',
    videoPreview: 'https://youtu.be/ZdX6HeDiNoQ',
    year: '2025'
  },
  {
    title: 'SectorSync Project Management Recommendation Tool',
    description: 'Designed and deployed a tool to recommend the optimal project management approach for the given requirements. Used Fuzzy Scoring methodoly to ensure correct output, and achieved an accuracy of 94%.',
    image: '/images/Sectorsync.jpeg',
    tags: ['JavaScript', 'Python', 'Project Management Methodologies'],
    github: 'https://github.com',
    demo: 'https://sectorsync-production.up.railway.app/',
    year: '2024'
  },
  {
    title: 'Autonomous Block Retrieval Robot',
    description: 'Built an autonomous mobile robot to search for colored blocks in a 10 ft × 10 ft workspace, retrieve them in a specified order (Red, then Green, then Blue), and deliver them to a drop zone. Implemented vision-based color detection using Raspberry Pi + PiCamera and integrated a gripper for pickup and placement. Integrated IMU heading feedback and wheel encoder odometry, using an Arduino sensor interface to stream IMU data to the Raspberry Pi control stack.',
    image: '/images/701Img.webp',
    tags: ['Raspberry Pi', 'PiCamera', 'Python', 'Arduino', 'IMU', 'Odometry', 'GPIO/PWM', 'Motor Control', 'Gripper'],
    github: 'https://github.com',
    year: '2025'
  },
  {
    title: 'Modelling and Operation of Semi with Trailers',
    description: 'Designed and simulated a semi-truck with two trailers attached and focused on getting it to move reliably through turns and tight spaces. Built the full system in ROS2 and Gazebo, added teleoperation and LiDAR-based navigation, and implemented closed-loop corrections to keep the trailers aligned during motion. Ran the same setup in Falcon Simulator to observe how the system behaved across different simulation environments.',
    image: '/images/semitrailer.jpg',
    tags: ['SolidWorks', 'SW2URDF Plugin', 'ROS2', 'Gazebo Classic', 'Falcon Sim', 'Python'],
    videoLink: 'https://youtu.be/69I42_CZQ1U',
    github: 'https://github.com',
    year: '2024'
  },
  {
    title: 'Comparison of Path Planning Algorithms for Non Holonomic Robots within Dense Obstacle Spaces',
    description: 'Wrote a comparison program to test multiple commonly used path planning algorithms for non-holonomic robots in cluttered environments. Procedurally generated maps and then ran each algorithm on the same map instances to keep conditions consistent. Used this setup to compare how different planners handled tight spaces, turns, and dense obstacles.',
    image: '/images/RuntimePerMap.png',
    tags: ['Python', 'Ubuntu', 'Path Planning'],
    github: 'https://github.com',
    year: '2024'
  },
  {
    title: 'Implementation of RDT-RRT for Non-Holonomic Robots',
    description: 'Implemented a novel path planning approach; RDT-RRT for non-holonomous robots, and simulated with Gazebo using the Turtlebot 3.',
    image: '/images/Path Comparison.png',
    tags: ['Python', 'Path Planning', 'ROS2', 'Gazebo', 'Turtlebot'],
    github: 'https://github.com',
    year: '2023'
  },
  {
  title: 'Portfolio Website (v1)',
  description: 'Previous version of my personal portfolio website.',
  image: '/images/OldSite.png',
  tags: ['React', 'Cloudflare Pages'],
  github: 'https://github.com/NeerajLaul/MyWebsite',
  demo: 'https://old.neerajlaul.in'
},

];

export const highlightedProjects = allProjects.slice(0, 3);
