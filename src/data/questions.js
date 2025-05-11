// Questions data for the CodeMatch application

export const questions = [
  {
    id: "goals",
    title: "What are your main goals with programming?",
    description: "Your primary objective will help us determine which languages align with your intentions.",
    options: [
      {
        id: "web-development",
        label: "Building websites and web applications",
        icon: "globe",
        languages: ["JavaScript", "TypeScript", "Python", "PHP", "Ruby"]
      },
      {
        id: "mobile-apps",
        label: "Creating mobile applications",
        icon: "smartphone",
        languages: ["Swift", "Kotlin", "JavaScript", "Dart"]
      },
      {
        id: "data-science",
        label: "Data analysis and machine learning",
        icon: "bar-chart",
        languages: ["Python", "R", "Julia", "SQL"]
      },
      {
        id: "game-development",
        label: "Developing games",
        icon: "gamepad",
        languages: ["C#", "C++", "JavaScript", "Python"]
      },
      {
        id: "system-programming",
        label: "Building systems and low-level applications",
        icon: "cpu",
        languages: ["C", "C++", "Rust", "Go"]
      },
      {
        id: "enterprise-apps",
        label: "Enterprise software development",
        icon: "briefcase",
        languages: ["Java", "C#", "TypeScript", "Python"]
      }
    ],
    multiSelect: false,
    weight: 0.35
  },
  {
    id: "experience",
    title: "What's your programming experience level?",
    description: "This helps us suggest languages with appropriate learning curves.",
    options: [
      {
        id: "beginner",
        label: "Complete beginner (no programming experience)",
        icon: "baby",
        languages: ["Python", "JavaScript", "Ruby"]
      },
      {
        id: "some-experience",
        label: "Some experience (basic concepts understood)",
        icon: "user",
        languages: ["Python", "JavaScript", "Java", "C#"]
      },
      {
        id: "intermediate",
        label: "Intermediate (comfortable with programming)",
        icon: "code",
        languages: ["TypeScript", "Go", "Rust", "Swift"]
      },
      {
        id: "experienced",
        label: "Experienced (proficient in at least one language)",
        icon: "award",
        languages: ["Rust", "Haskell", "Go", "Elixir"]
      }
    ],
    multiSelect: false,
    weight: 0.20
  },
  {
    id: "platforms",
    title: "Which platforms are you interested in?",
    description: "Different languages excel on different platforms.",
    options: [
      {
        id: "web",
        label: "Web (browsers)",
        icon: "globe",
        languages: ["JavaScript", "TypeScript", "PHP", "Ruby", "Python"]
      },
      {
        id: "desktop",
        label: "Desktop applications",
        icon: "monitor",
        languages: ["C#", "Java", "C++", "Python", "JavaScript"]
      },
      {
        id: "mobile",
        label: "Mobile devices",
        icon: "smartphone",
        languages: ["Swift", "Kotlin", "JavaScript", "Dart"]
      },
      {
        id: "server",
        label: "Server/backend",
        icon: "server",
        languages: ["Python", "Java", "Go", "C#", "JavaScript"]
      },
      {
        id: "embedded",
        label: "Embedded systems/IoT",
        icon: "cpu",
        languages: ["C", "C++", "Rust", "Python"]
      }
    ],
    multiSelect: true,
    weight: 0.20
  },
  {
    id: "preferences",
    title: "What aspects of programming languages matter to you?",
    description: "Everyone has different priorities when coding.",
    options: [
      {
        id: "ease-of-learning",
        label: "Easy to learn and use",
        icon: "book",
        languages: ["Python", "Ruby", "JavaScript", "Go"]
      },
      {
        id: "performance",
        label: "High performance and efficiency",
        icon: "zap",
        languages: ["C", "C++", "Rust", "Go"]
      },
      {
        id: "job-market",
        label: "Strong job market demand",
        icon: "briefcase",
        languages: ["JavaScript", "Python", "Java", "C#"]
      },
      {
        id: "ecosystem",
        label: "Rich libraries and frameworks",
        icon: "package",
        languages: ["JavaScript", "Python", "Java", "C#"]
      },
      {
        id: "modern-features",
        label: "Modern language features",
        icon: "star",
        languages: ["Kotlin", "TypeScript", "Swift", "Rust"]
      },
      {
        id: "community",
        label: "Active community and support",
        icon: "users",
        languages: ["JavaScript", "Python", "Java", "C#"]
      }
    ],
    multiSelect: true,
    weight: 0.15
  },
  {
    id: "personality",
    title: "What best describes your personality?",
    description: "Different languages often appeal to different types of thinkers.",
    options: [
      {
        id: "analytical",
        label: "Analytical and detail-oriented",
        icon: "search",
        languages: ["Haskell", "Rust", "C++", "TypeScript"]
      },
      {
        id: "creative",
        label: "Creative and expressive",
        icon: "palette",
        languages: ["Ruby", "JavaScript", "Python", "Swift"]
      },
      {
        id: "practical",
        label: "Practical and results-focused",
        icon: "target",
        languages: ["Go", "Java", "C#", "PHP"]
      },
      {
        id: "explorer",
        label: "Explorer who loves learning new things",
        icon: "compass",
        languages: ["Elixir", "Rust", "Kotlin", "TypeScript"]
      }
    ],
    multiSelect: false,
    weight: 0.10
  }
];

// Language data with detailed information
export const languageData = {
  "JavaScript": {
    name: "JavaScript",
    description: "The universal language of the web that powers interactive websites and applications across all browsers.",
    matchDescription: "JavaScript is ideal for your interests because it's versatile, widely used, and essential for web development.",
    pros: [
      "Ubiquitous: runs everywhere (browsers, servers, mobile)",
      "Huge ecosystem with npm and countless libraries",
      "Versatile for front-end, back-end, mobile, and desktop apps",
      "Great for beginners with immediate visual feedback",
      "Constantly evolving with regular language improvements"
    ],
    cons: [
      "Some quirky language behaviors and inconsistencies",
      "Dynamic typing can lead to runtime errors",
      "Sometimes overwhelming variety of frameworks and tools",
      "Performance limitations compared to compiled languages",
      "Asynchronous programming concepts can be challenging"
    ],
    resources: [
      { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { title: "JavaScript.info", url: "https://javascript.info/" },
      { title: "freeCodeCamp JavaScript Course", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
      { title: "Eloquent JavaScript (free book)", url: "https://eloquentjavascript.net/" }
    ],
    color: "#F7DF1E"
  },
  "Python": {
    name: "Python",
    description: "A versatile, readable language popular in data science, web development, automation, and education.",
    matchDescription: "Python matches your preferences as it's easy to learn, highly versatile, and has exceptional libraries for your areas of interest.",
    pros: [
      "Clean, readable syntax ideal for beginners",
      "Versatile across web, data, AI, automation and more",
      "Massive ecosystem of libraries and frameworks",
      "Strong community support and documentation",
      "Excellent for rapid development and prototyping"
    ],
    cons: [
      "Slower performance compared to compiled languages",
      "Global Interpreter Lock (GIL) limits true multithreading",
      "Mobile app development is not a strength",
      "Package management can be confusing for beginners",
      "Version transition (Python 2 to 3) caused fragmentation"
    ],
    resources: [
      { title: "Python.org Official Tutorials", url: "https://docs.python.org/3/tutorial/" },
      { title: "Real Python", url: "https://realpython.com/" },
      { title: "Automate the Boring Stuff (free book)", url: "https://automatetheboringstuff.com/" },
      { title: "CS50's Introduction to Programming with Python", url: "https://cs50.harvard.edu/python/" }
    ],
    color: "#3776AB"
  },
  "Java": {
    name: "Java",
    description: "A robust, object-oriented language powering enterprise applications, Android development, and backend systems worldwide.",
    matchDescription: "Java aligns with your goals as it offers stability, performance, and excellent support for large-scale applications.",
    pros: [
      "Write once, run anywhere (platform independence)",
      "Extremely stable with backward compatibility focus",
      "Excellent for large enterprise applications",
      "Strong typing catches errors at compile time",
      "Huge job market and enterprise adoption"
    ],
    cons: [
      "Verbose syntax with significant boilerplate code",
      "Steeper learning curve for beginners",
      "Slower startup times compared to some languages",
      "Memory consumption can be high",
      "Development pace can feel slower than modern languages"
    ],
    resources: [
      { title: "Oracle Java Tutorials", url: "https://docs.oracle.com/javase/tutorial/" },
      { title: "Baeldung", url: "https://www.baeldung.com/" },
      { title: "Java Programming MOOC", url: "https://java-programming.mooc.fi/" },
      { title: "The Java Workshop (book)", url: "https://www.packtpub.com/product/the-java-workshop/9781838986698" }
    ],
    color: "#007396"
  },
  "C#": {
    name: "C#",
    description: "Microsoft's elegant, type-safe language used for Windows apps, game development with Unity, and web services with .NET.",
    matchDescription: "C# is a great match for you because it combines modern language features with strong performance and Microsoft's robust ecosystem.",
    pros: [
      "Excellent developer tools and IDE support",
      "Modern language features with regular updates",
      "Strong performance with the .NET platform",
      "Unity game engine integration",
      "Microsoft backing ensures long-term support"
    ],
    cons: [
      "Historically focused on Windows (though now cross-platform)",
      "Microsoft ecosystem can have steep learning curve",
      "Less popular for web development outside .NET shops",
      "Performance trails C/C++ for system-level tasks",
      "Package management has been through transitions"
    ],
    resources: [
      { title: "Microsoft Learn C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
      { title: "C# Station Tutorial", url: "https://csharp-station.com/Tutorial/CSharp/SmartConsoleSetup.aspx" },
      { title: "Unity Learn", url: "https://learn.unity.com/" },
      { title: "C# in Depth (book)", url: "https://csharpindepth.com/" }
    ],
    color: "#239120"
  },
  "TypeScript": {
    name: "TypeScript",
    description: "JavaScript with added types, providing better tooling, error catching, and code organization for larger projects.",
    matchDescription: "TypeScript matches your needs perfectly as it brings type safety and better tooling to JavaScript, making it excellent for larger projects.",
    pros: [
      "All the advantages of JavaScript plus static typing",
      "Excellent tooling, IDE support, and error detection",
      "Ideal for large codebases and teams",
      "Easy adoption path from JavaScript",
      "Microsoft backing with excellent documentation"
    ],
    cons: [
      "Adds complexity on top of JavaScript",
      "Type definitions for libraries can be inconsistent",
      "Requires compilation step in development",
      "Learning curve for type systems for beginners",
      "Some advanced type features can be complex"
    ],
    resources: [
      { title: "TypeScript Documentation", url: "https://www.typescriptlang.org/docs/" },
      { title: "TypeScript Deep Dive (free book)", url: "https://basarat.gitbook.io/typescript/" },
      { title: "Programming TypeScript (book)", url: "https://www.oreilly.com/library/view/programming-typescript/9781492037644/" },
      { title: "TypeScript Academy", url: "https://typescript.academy/" }
    ],
    color: "#3178C6"
  },
  "Swift": {
    name: "Swift",
    description: "Apple's modern, safe language for iOS, macOS, watchOS and tvOS application development.",
    matchDescription: "Swift is ideal for your interests as it provides a modern, safe way to build applications for Apple's ecosystem.",
    pros: [
      "Modern, clean syntax that's easy to read and write",
      "Strong static typing with type inference",
      "Performance close to C/C++ for many tasks",
      "First-class Apple platform support and documentation",
      "Strong focus on safety and error prevention"
    ],
    cons: [
      "Primarily focused on Apple ecosystem",
      "Still evolving with occasional breaking changes",
      "Smaller community compared to older languages",
      "Limited use outside Apple platforms",
      "Complex interoperability with Objective-C legacy code"
    ],
    resources: [
      { title: "Swift.org", url: "https://www.swift.org/documentation/" },
      { title: "Apple's Swift Programming Language Guide", url: "https://docs.swift.org/swift-book/" },
      { title: "Hacking with Swift (free tutorials)", url: "https://www.hackingwithswift.com/" },
      { title: "Ray Wenderlich Swift Tutorials", url: "https://www.raywenderlich.com/ios/paths" }
    ],
    color: "#F05138"
  },
  "Go": {
    name: "Go",
    description: "Google's efficient language for building simple, reliable, and efficient systems, especially network services and infrastructure.",
    matchDescription: "Go aligns with your interests in building high-performance, scalable systems with a language that emphasizes simplicity.",
    pros: [
      "Exceptional performance and low resource usage",
      "Built-in concurrency with goroutines and channels",
      "Fast compilation and simple deployment",
      "Clean syntax with minimal features reduces complexity",
      "Excellent for cloud infrastructure and microservices"
    ],
    cons: [
      "Less expressive than some languages (by design)",
      "No generics until recently (Go 1.18)",
      "Limited metaprogramming capabilities",
      "Smaller ecosystem than established languages",
      "Error handling can feel verbose"
    ],
    resources: [
      { title: "Go by Example", url: "https://gobyexample.com/" },
      { title: "Go Tour", url: "https://tour.golang.org/" },
      { title: "Learn Go with Tests", url: "https://quii.gitbook.io/learn-go-with-tests/" },
      { title: "The Go Programming Language (book)", url: "https://www.gopl.io/" }
    ],
    color: "#00ADD8"
  },
  "Rust": {
    name: "Rust",
    description: "A systems language focused on safety, speed, and concurrency without a garbage collector.",
    matchDescription: "Rust is a perfect match for your interests in system programming with safety guarantees that prevent common bugs and security issues.",
    pros: [
      "Memory safety without garbage collection",
      "Prevents common bugs at compile time",
      "Performance comparable to C/C++",
      "Modern language features and package management",
      "Growing ecosystem and passionate community"
    ],
    cons: [
      "Steep learning curve, especially ownership concepts",
      "Rigorous compiler can feel frustrating initially",
      "Longer compilation times than some languages",
      "Newer ecosystem with fewer libraries than established languages",
      "Complex generic and trait system"
    ],
    resources: [
      { title: "The Rust Programming Language (book)", url: "https://doc.rust-lang.org/book/" },
      { title: "Rust by Example", url: "https://doc.rust-lang.org/rust-by-example/" },
      { title: "Rustlings Course", url: "https://github.com/rust-lang/rustlings/" },
      { title: "Zero To Production In Rust", url: "https://www.zero2prod.com/" }
    ],
    color: "#000000"
  },
  // Additional languages could be added here
};

/**
 * Calculate language matches based on user answers
 * @param {Array} answers - User's answers to questions
 * @returns {Array} - Sorted array of language matches with scores
 */
export function calculateLanguageMatches(answers) {
  const languageScores = {};
  
  // Initialize scores for all languages
  Object.keys(languageData).forEach(lang => {
    languageScores[lang] = 0;
  });
  
  // Calculate weighted scores
  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    
    if (!question) return;
    
    // Get selected options
    const selectedOptions = Array.isArray(answer.answerId) 
      ? answer.answerId.map(id => question.options.find(opt => opt.id === id))
      : [question.options.find(opt => opt.id === answer.answerId)];
    
    // Add weighted scores for each language mentioned in the selected options
    selectedOptions.forEach(option => {
      if (!option) return;
      
      option.languages.forEach(lang => {
        const weight = question.weight / selectedOptions.length;
        languageScores[lang] = (languageScores[lang] || 0) + weight;
      });
    });
  });
  
  // Convert to array and sort by score
  const matches = Object.entries(languageScores)
    .map(([language, score]) => ({
      language,
      score: Math.round(score * 100),
      data: languageData[language]
    }))
    .filter(match => match.score > 0)
    .sort((a, b) => b.score - a.score);
  
  return matches.slice(0, 5); // Return top 5 matches
}