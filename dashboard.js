/* --- 1. NEW: WEIGHTAGE DATABASE --- */

const userEmail = localStorage.getItem("userEmail");
const userName = localStorage.getItem("userName");


// ✅ ADD THIS
let videosWatched = parseInt(localStorage.getItem('videosWatched') || '0', 10);


// Show user's name in greeting
document.getElementById("greeting-message").innerText = `Welcome, ${userName}!`;

const weightageByExam = {
    "10th_boards": {
        title: "Class 10 Boards",
        subjects: [
            { name: "Science", percentage: 33, color: "#007bff" },
            { name: "Maths", percentage: 33, color: "#28a745" },
            { name: "Social Science", percentage: 34, color: "#ffc107" }
        ]
    },
    "12th_boards": {
        title: "Class 12 (Science)",
        subjects: [
            { name: "Physics", percentage: 30, color: "#007bff" },
            { name: "Chemistry", percentage: 30, color: "#28a745" },
            { name: "Maths/Bio", percentage: 40, color: "#ffc107" }
        ]
    },
    "jee": {
        title: "IIT-JEE",
        subjects: [
            { name: "Physics", percentage: 33, color: "#007bff" },
            { name: "Chemistry", percentage: 33, color: "#28a745" },
            { name: "Maths", percentage: 34, color: "#ffc107" }
        ]
    },
    "neet": {
        title: "NEET",
        subjects: [
            { name: "Biology", percentage: 50, color: "#28a745" },
            { name: "Physics", percentage: 25, color: "#007bff" },
            { name: "Chemistry", percentage: 25, color: "#ffc107" }
        ]
    },
    "clat": {
        title: "CLAT",
        subjects: [
            { name: "English", percentage: 20, color: "#007bff" },
            { name: "Current Affairs", percentage: 25, color: "#17a2b8" },
            { name: "Legal Reasoning", percentage: 25, color: "#ffc107" },
            { name: "Logical Reasoning", percentage: 20, color: "#dc3545" },
            { name: "Quantitative", percentage: 10, color: "#6c757d" }
        ]
    },
    "cat": {
        title: "CAT",
        subjects: [
            { name: "VARC", percentage: 34, color: "#007bff" },
            { name: "LRDI", percentage: 32, color: "#ffc107" },
            { name: "Quant", percentage: 34, color: "#28a745" }
        ]
    },
    "upsc": {
        title: "UPSC (Prelims GS 1)",
        subjects: [
            { name: "History", percentage: 20, color: "#ffc107" },
            { name: "Polity", percentage: 15, color: "#007bff" },
            { name: "Economy", percentage: 18, color: "#28a745" },
            { name: "Environment", percentage: 20, color: "#17a2b8" },
            { name: "Science/Other", percentage: 27, color: "#dc3545" }
        ]
    },
    "gate": {
        title: "GATE (M.Tech)",
        subjects: [
            { name: "Computer Science", percentage: 72, color: "#007bff" },
            { name: "General Aptitude", percentage: 28, color: "#28a745" }
        ]
    },
    "gre": {
        title: "GRE (International)",
        subjects: [
            { name: "Quant", percentage: 50, color: "#007bff" },
            { name: "Verbal", percentage: 50, color: "#ffc107" }
        ]
    },
    "net": {
        title: "UGC-NET (Professor)",
        subjects: [
            { name: "Paper 1", percentage: 33, color: "#007bff" },
            { name: "Paper 2 (Subject)", percentage: 67, color: "#28a745" }
        ]
    }
};

/* --- 2. YOUR RESOURCE DATABASE (with Video URLs + PYQs) --- */
const resourcesByExam = {
    // --- School ---
    "10th_boards": {
        title: "Class 10 Boards",
        subjects: {
            "Science": [
                { title: "Life Processes - One Shot", channel: "Physics Wallah", duration: "3:45:20", difficulty: "Medium", url: "https://www.youtube.com/watch?v=a3klf9QIUg8" },
                { title: "Light Reflection & Refraction - Full Chapter", channel: "Vedantu", duration: "2:10:05", difficulty: "Medium", url: "https://www.youtube.com/watch?v=UTwnriP1Npk" },
                { title: "Acids, Bases & Salts - 20 Min Revision", channel: "Dear Sir", duration: "0:22:15", difficulty: "Easy", url: "https://www.youtube.com/watch?v=7k2rs5yGOFM" }
            ],
            "Maths": [
                { title: "Real Numbers - Full Chapter", channel: "Dear Sir", duration: "1:15:30", difficulty: "Easy", url: "https://www.youtube.com/watch?v=-UdHmSTmQtw" },
                { title: "Trigonometry - All Concepts", channel: "Magnet Brains", duration: "2:50:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=sRZbjNtOflY" },
                { title: "Circles - All Theorems", channel: "Vedantu", duration: "1:05:10", difficulty: "Hard", url: "https://www.youtube.com/watch?v=76aQMXcjF4o" }
            ],
            "Social Science": [
                { title: "Nationalism in India - One Shot", channel: "Digraj Singh Rajput", duration: "1:30:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=HP1kdhvZGzc" },
                { title: "Power Sharing - Full Chapter", channel: "Magnet Brains", duration: "0:45:10", difficulty: "Easy", url: "https://www.youtube.com/watch?v=UWYT7KitauA" },
                { title: "Sectors of Indian Economy - One Shot", channel: "Padhle", duration: "1:12:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=y7QdyRP-jwQ" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [{ subject: "Science", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202025/ICSE%2010/Physics%202025.pdf" }, { subject: "Maths", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202025/ICSE%2010/ICSE-10%20Board%20Paper%20Mathematics.pdf" }, { subject: "Computer Application", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202025/ICSE%2010/Computer%20App%202025.pdf" }] },
            { year: 2024, papers: [{ subject: "Science", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202024/ICSE%20Class%2010/ICSE%20-%20X%20Physics%20Board%20Paper%202024.pdf" }, { subject: "Maths", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202024/ICSE%20Class%2010/ICSE%20Math-10%20Solved%20Paper-2024.pdf" }, { subject: "Computer Application", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Papers%20Files/CISCE%20Class%2010/ICSE%20X%20Computer%20Paper-2023.pdf" }] },
            { year: 2023, papers: [{ subject: "Science", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp/cisce/class10/physics/Solved%20Paper%202023.pdf" }, { subject: "Maths", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp/cisce/class10/mathematics/Solved%20Paper%202023.pdf" }, { subject: "English", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp/cisce/class10/english1/Solved%20Paper%202023.pdf" }] },
        ]
    },
    "12th_boards": {
        title: "Class 12 Boards",
        subjects: {
            "Physics": [
                { title: "Electric Charges & Fields - One Shot", channel: "Physics Wallah", duration: "4:30:10", difficulty: "Medium", url: "https://www.youtube.com/watch?v=WOjaDkFOq3E" },
                { title: "Ray Optics - Full Chapter", channel: "Vedantu", duration: "3:15:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=KZMf5XiuvcE" },
                { title: "Semiconductors - 1 Hour Revision", channel: "Apni Kaksha", duration: "1:05:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=oOY5g4RtKPM" }
            ],
            "Chemistry": [
                { title: "Solutions - One Shot", channel: "Unacademy", duration: "2:40:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=wONsfq3rw1w" },
                { title: "Electrochemistry - Full Chapter", channel: "Physics Wallah", duration: "3:10:20", difficulty: "Medium", url: "https://www.youtube.com/watch?v=ZRSDAkjXR8c" },
                { title: "Haloalkanes & Haloarenes - One Shot", channel: "Vedantu", duration: "2:55:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=SUOBNBE-wBI" }
            ],
            "Maths": [
                { title: "Matrices & Determinants - One Shot", channel: "Neha Agrawal", duration: "2:18:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=qjKCgq2KYIY" },
                { title: "Integration - Full Chapter", channel: "Apni Kaksha", duration: "5:30:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=yY2oUKVAkdY" },
                { title: "3D Geometry - Complete Chapter", channel: "Vedantu", duration: "2:45:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=jCluGlqH70M" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [{ subject: "English", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202025/ISC%2012/English%20Paper%201.pdf" }, { subject: "Chemistry", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202025/ISC%2012/Che%202025.pdf" }, { subject: "Maths", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202025/ISC%2012/Math%202025.pdf" }] },
            { year: 2024, papers: [{ subject: "English", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202024/ISC%20Class%2012/ISC%20XII%20English%20Paper-1%20Paper.pdf" }, { subject: "Chemistry", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202024/ISC%20Class%2012/ISC%20Chemistry%2012th%20Solved%20Paper-2024.pdf" }, { subject: "Maths", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202025/ISC%2012/Math%202025.pdf" }] },
            { year: 2023, papers: [{ subject: "English", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp/cisce/class12/English-I/English-1%20PY%202023.pdf" }, { subject: "Chemistry", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp/cisce/class12/Chemistry/Chemistry%20FY%202023.pdf" }, { subject: "Maths", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp/cisce/class12/Mathematics/Maths%20PY%202023.pdf" }] },
        ]
    },
    "jee": {
        title: "IIT-JEE",
        subjects: {
            "Physics": [
                { title: "Rotation - JEE Advanced", channel: "Physics Galaxy", duration: "5:10:45", difficulty: "Hard", url: "https://www.youtube.com/watch?v=WwoNNUG_rFg" },
                { title: "Modern Physics - JEE Mains One Shot", channel: "Unacademy JEE", duration: "3:20:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=V76QPpoWVwA" },
                { title: "Units & Dimensions - Full Chapter", channel: "Physics Wallah", duration: "1:30:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=Xmjx910G0WI" }
            ],
            "Chemistry": [
                { title: "Chemical Bonding - One Shot", channel: "Physics Wallah", duration: "4:05:10", difficulty: "Medium", url: "https://www.youtube.com/watch?v=gcx8-VOoegg" },
                { title: "GOC - General Organic Chemistry", channel: "Unacademy JEE", duration: "6:15:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=3EuZ17E_-5c" },
                { title: "Mole Concept - Basic to Advanced", channel: "Apni Kaksha", duration: "3:00:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=tMHrpmJH5I8" }
            ],
            "Maths": [
                { title: "Calculus - Full Marathon", channel: "Vedantu JEE", duration: "8:30:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=RE1qFUEq3hg" },
                { title: "Conic Sections - One Shot", channel: "Unacademy JEE", duration: "4:12:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=XNXhkDDId8U" },
                { title: "Permutations & Combinations", channel: "Apni Kaksha", duration: "2:45:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=CGgyPMkMm50" }
            ]
        },
        pyqs: [
            { year: 2023, papers: [{ subject: "JEE Mains (Maths)", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/JEE/JEE%20Main/Maths/Shift%202%20April%20with%20sol%20Maths.pdf" }, { subject: "JEE Mains (Physics)", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/JEE/JEE%20Main/Physics/nov/JEE%20Mains%20Physics%202023%2025-Jan-Shift%201.pdf" }, { subject: "JEE Mains (Chemistry)", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/JEE/JEE%20Main/Chemistry/Shift%202%20April%20with%20sol%20Chemistry.pdf" }] },
            { year: 2022, papers: [{ subject: "JEE Mains (Maths)", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/JEE/JEE%20Main/Maths/JEE%20main%20Maths%2029th%20June%20Shift%202%20paper%20with%20solution.pdf" }, { subject: "JEE Mains (Physics)", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/JEE/JEE%20Main/Physics/JEE%20main%20physics%2029th%20June%20Shift%202%20paper%20with%20solution.pdf" }, { subject: "JEE Mains (Chemistry)", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/JEE/JEE%20Main/Chemistry/JEE%20main%20Chemistry%2029th%20July%20Shift%202%20paper%20with%20solution.pdf" }] },
            { year: 2021, papers: [{ subject: "JEE Mains (Maths)", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/JEE/JEE%20Main/Maths/JEE%20main%20Maths%2020th%20July%20Shift%201%20paper%20with%20solution.pdf" }, { subject: "JEE Mains (Physics)", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/JEE/JEE%20Main/Physics/JEE%20main%20physics%2024th%20Feb%20Shift%201%20paper%20with%20solution.pdf" },] },
        ]
    },
    "neet": {
        title: "NEET (Medical)",
        subjects: {
            "Biology": [
                { title: "Human Physiology - One Shot", channel: "Unacademy NEET", duration: "10:15:30", difficulty: "Hard", url: "https://www.youtube.com/watch?v=8qMEmWjt7zg" },
                { title: "Genetics & Evolution - Full Unit", channel: "Physics Wallah", duration: "7:45:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=F4x_isMvxT0" },
                { title: "Plant Kingdom - 30 Min Revision", channel: "Vedantu", duration: "0:30:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=XdjmqIZ1wp0" }
            ],
            "Physics": [
                { title: "NEET Physics - Full Syllabus Marathon", channel: "Physics Wallah", duration: "12:00:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=01CQR6uDEEU" },
                { title: "Current Electricity - NEET", channel: "Unacademy NEET", duration: "3:10:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=MuUhx3Ghd2Y" },
                { title: "Laws of Motion - Concepts", channel: "Physics Galaxy", duration: "2:20:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=5QXTj_MqmcY" }
            ],
            "Chemistry": [
                { title: "Organic Chemistry - Name Reactions", channel: "Physics Wallah", duration: "4:00:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=4-aEKLNkVXo" },
                { title: "p-Block Elements - One Shot", channel: "Unacademy NEET", duration: "3:30:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=KRRnFab66Gs" },
                { title: "Atomic Structure - Full Chapter", channel: "Vedantu NEET", duration: "2:40:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=ke_kmMUoGnw" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [{ subject: "NEET Paper", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/NEET/NEET%202025/NEET%202025.pdf" }] },
            { year: 2024, papers: [{ subject: "NEET Paper", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/NEET/NEET%202024/2_Book%20%28NEET%2019%20Years%20Solved%20Papers%202025%29%20Page%201-664.pdf" }] },
            { year: 2023, papers: [{ subject: "NEET Paper", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp24/neet_yearwise/NEET%20UG%202023%2007th%20May.pdf" }] },
            { year: 2022, papers: [{ subject: "NEET Paper", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp24/neet_yearwise/NEET%20PYQ%202022.pdf" }] }
        ]
    },
    "clat": {
        title: "CLAT (Law)",
        subjects: {
            "Legal Reasoning": [
                { title: "Introduction to Legal Reasoning", channel: "LegalEdge", duration: "1:05:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=w8EpSJHvLw4" },
                { title: "Law of Torts - Full Basics", channel: "Unacademy Law", duration: "2:15:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=Bk6vRJNgqPs" },
                { title: "How to Read Legal Passages", channel: "LegalEdge", duration: "0:45:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=jiYsOgpH4JI" }
            ],
            "Logical Reasoning": [
                { title: "Critical Reasoning - Assumptions", channel: "Unacademy Law", duration: "1:30:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=cidG0Wi61B0" },
                { title: "Syllogisms - Tricks", channel: "LegalEdge", duration: "0:50:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=YhQbZMK58VU" },
                { title: "Para-Jumbles - Full Strategy", channel: "CLAT Gurukul", duration: "1:10:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=ZmmtRT8aVGg" }
            ],
            "Quantitative Techniques": [
                { title: "Data Interpretation for CLAT", channel: "LegalEdge", duration: "1:25:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=tqko0MOHZFg" },
                { title: "Percentage & Ratios", channel: "Unacademy Law", duration: "2:00:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=lB8n8YNPvRM" },
                { title: "Averages & Mixtures", channel: "CLAT Gurukul", duration: "1:15:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=OKSJDDAyqP0" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [{ subject: "CLAT Paper", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/clat_and_ailet/CLAT%202025.pdf" }] },
            { year: 2024, papers: [{ subject: "CLAT Paper", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/clat_and_ailet/CLAT%202024.pdf" }] },
            { year: 2023, papers: [{ subject: "CLAT Paper", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/clat_and_ailet/CLAT%20and%20AILET%202023.pdf" }] },
            { year: 2022, papers: [{ subject: "CLAT Paper", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/clat_and_ailet/CLAT%20and%20AILET%202022.pdf" }] }
        ]
    },
    "cat": {
        title: "CAT (MBA)",
        subjects: {
            "Quantitative Aptitude": [
                { title: "Arithmetic - One Shot Marathon", channel: "Unacademy CAT", duration: "6:30:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=tP4bU-oTbQM" },
                { title: "Algebra - Complete Basics", channel: "Rodha", duration: "3:10:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=TV9rQm15sWo" },
                { title: "Geometry & Mensuration", channel: "Elites Grid", duration: "4:05:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=utY-EIvE2Dg" }
            ],
            "LRDI": [
                { title: "Arrangements - Complete Set", channel: "Elites Grid", duration: "2:45:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=GYe98jwCn7g" },
                { title: "Games & Tournaments", channel: "Rodha", duration: "1:50:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=tCWJMtunG_s" },
                { title: "Venn Diagrams - 3 Sets", channel: "Unacademy CAT", duration: "1:30:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=nCyXygt7RzU" }
            ],
            "VARC": [
                { title: "Reading Comprehension Strategy", channel: "VARC 100", duration: "0:55:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=bhT_aAYK29o" },
                { title: "Para Jumbles - 5 Easy Tricks", channel: "Elites Grid", duration: "1:10:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=0hUxmEPPa7s" },
                { title: "Summary of Passages", channel: "Unacademy CAT", duration: "1:20:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=K77dQAOf_Vg" }
            ]
        },
        pyqs: [
            { year: 2024, papers: [{ subject: "CAT", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/CAT/1-Inner%2BPaper%20%28CAT%2025%20Yrs%20CW%20%20TW%20SP%29%20Pg%201-64.pdf" }] },
            { year: 2023, papers: [{ subject: "CAT", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp23/cat/CAT%2025%20years%20Chapter%20wise%202023.pdf" }] },
            { year: 2022, papers: [{ subject: "CAT", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/CAT/CAT%202022%20-%20Shift%20III%20Paper%203%20with%20solutions.pdf" }] },
            { year: 2022, papers: [{ subject: "CAT", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/CAT/CAT%202021%20Shift%201%20Paper%20with%20Solutions.pdf" }] }
        ]
    },
    "gate": {
        title: "GATE (M.Tech)",
        subjects: {
            "Computer Science": [
                { title: "Theory of Computation - Full Course", channel: "Unacademy", duration: "10:30:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=9kuynHcM3UA" },
                { title: "Database Management (DBMS) - One Shot", channel: "Gate Smashers", duration: "5:15:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=e-i-g-n-Sso" },
                { title: "Data Structures - Full Course", channel: "Jenny's Lectures", duration: "8:00:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=PBr-A3-3szo" }
            ],
            "General Aptitude": [
                { title: "Quantitative Aptitude - Full Course", channel: "Unacademy", duration: "6:45:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=XyhGv2ak-CI" },
                { title: "Verbal Ability for GATE", channel: "Gate Smashers", duration: "2:10:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=cFirO5wWHyU" },
                { title: "Logical Reasoning - Full", channel: "Jenny's Lectures", duration: "3:00:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=K5yPCgdLrCk" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [{ subject: "Gate", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/GATE/GATE%202025/Engineering%20Math%202025.pdf" }] },
            { year: 2024, papers: [{ subject: "Gate", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp24/gate/2024%20GATE%20Engineering%20Maths.pdf" }] },
            { year: 2023, papers: [{ subject: "Gate", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp24/gate/GATE%20PYQ%202023.pdf" }] },
            { year: 2023, papers: [{ subject: "Gate", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp24/gate/2022%20GATE%20Engineering%20Maths.pdf" }] }
        ]
    },
    "gre": {
        title: "GRE (International)",
        subjects: {
            "Quant": [
                { title: "GRE Quant - Full Course", channel: "Magoosh", duration: "4:30:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=l-w-VW-x0k4" },
                { title: "Data Interpretation Strategies", channel: "GregMat", duration: "1:15:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=mNq3Sj8qHn0" },
                { title: "Permutations & Combinations", channel: "The Organic Chemistry Tutor", duration: "1:10:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=mNq3Sj8qHn0" }
            ],
            "Verbal": [
                { title: "Reading Comprehension - Strategy", channel: "GregMat", duration: "1:00:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=f-WX-n1uQoM" },
                { title: "Text Completion - 5 Tips", channel: "Magoosh", duration: "0:25:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=GkIY84E-Ijg" },
                { title: "AWA Essay Writing Guide", channel: "GregMat", duration: "0:50:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=uOb-k4udXEU" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [{ subject: "Practice Test 1", url: "#" }, { subject: "Practice Test 2", url: "#" }] },
            { year: 2024, papers: [{ subject: "Practice Test 1", url: "#" }, { subject: "Practice Test 2", url: "#" }] }
        ]
    },
    "upsc": {
        title: "UPSC (Civil Services)",
        subjects: {
            "Polity": [
                { title: "Laxmikanth - Full Marathon", channel: "Study IQ", duration: "11:00:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=oIN7FBZjqGI" },
                { title: "Parliament of India - All Details", channel: "Drishti IAS", duration: "1:45:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=oizSsLhlcIw" },
                { title: "Fundamental Rights - In-Depth", channel: "Unacademy", duration: "2:10:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=tRemoWJ1UBw" }
            ],
            "History": [
                { title: "Modern History - Spectrum One Shot", channel: "Study IQ", duration: "9:30:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=IIR3FRCyO-s" },
                { title: "Ancient History - Full", channel: "Drishti IAS", duration: "6:15:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=eHEv5aF5td8" },
                { title: "Art & Culture - Nitin Singhania", channel: "Unacademy", duration: "4:00:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=VxG4MgN7P7k" }
            ],
            "Economy": [
                { title: "Indian Economy - Full Syllabus", channel: "Mrunal Patel", duration: "15:00:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=IRMepGlN3so" },
                { title: "Budget 2025 Analysis", channel: "Drishti IAS", duration: "1:30:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=l-w-VW-x0k4" }, // Placeholder, update when available
                { title: "Banking & Monetary Policy", channel: "Study IQ", duration: "2:20:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=GQ5N51lxE88" }
            ]
        },
        pyqs: [
            { year: 2015, papers: [{ subject: "Prelims GS", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/UPSC/Paper%201/Paper%201%202015.pdf" }] },
            { year: 2016, papers: [{ subject: "Prelims GS", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/UPSC/Paper%201/Paper%201%202016.pdf" }] },
            { year: 2017, papers: [{ subject: "Prelims GS", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/UPSC/Paper%201/Paper%201%202016.pdf" }] },
            { year: 2018, papers: [{ subject: "Prelims GS", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/UPSC/Paper%201/Paper%201%202018.pdf" }] }
        ]
    },
    "net": {
        title: "UGC-NET (Professor)",
        subjects: {
            "Paper 1 - Teaching Aptitude": [
                { title: "Teaching Aptitude - Full Course", channel: "Unacademy", duration: "5:30:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=oCqqZ_qq_ag" },
                { title: "Methods of Teaching", channel: "BYJU's", duration: "1:10:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=r7RT6pHKh7M" },
                { title: "Evaluation Systems", channel: "GradeUp", duration: "0:45:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=oiiLmYHoCnM" }
            ],
            "Paper 1 - Research Aptitude": [
                { title: "Research Aptitude - One Shot", channel: "Unacademy", duration: "3:15:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=jlavtfeX9To" },
                { title: "Types of Research", channel: "BYJU's", duration: "1:00:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=x99cKChf3HY" },
                { title: "Hypothesis Testing", channel: "GradeUp", duration: "0:50:00", difficulty: "Hard", url: "https://www.youtube.com/watch?v=x99cKChf3HY" }
            ],
            "Paper 1 - Communication": [
                { title: "Communication - Full Unit", channel: "Unacademy", duration: "2:40:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=HAnw168huqA" },
                { title: "Barriers to Communication", channel: "BYJU's", duration: "0:40:00", difficulty: "Easy", url: "https://www.youtube.com/watch?v=FxIwXNmijJw" },
                { title: "Mass Media & Society", channel: "GradeUp", duration: "1:05:00", difficulty: "Medium", url: "https://www.youtube.com/watch?v=CYodcVbcS7A" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [{ subject: "Paper (January)", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/UGC/UGC%20NET%20PYQ%202025.pdf" }] },
            { year: 2024, papers: [{ subject: "Paper (June)", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/UGC/UGC%20NET%20PYQ%20June%202024.pdf" }] },
            { year: 2023, papers: [{ subject: "Paper (March)", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp23/ugc_net/March%202023.pdf" }] },
            { year: 2022, papers: [{ subject: "Paper (September)", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/UGC/UGC%20net.pdf" }] }
        ]
    }
};

// =========================================================
// 2. GLOBAL HELPER FUNCTIONS
// =========================================================

/* --- DYNAMIC RESOURCE LOADING FUNCTION (Reads Video URLs + PYQs) --- */
function loadDynamicResources() {
    const resourcesTab = document.getElementById('resources');
    const userExam = localStorage.getItem('userExam') || '10th_boards';
    const examData = resourcesByExam[userExam];

    if (!resourcesTab) return;

    if (examData) {
        let html = `<h1>Resources for ${examData.title}</h1>`;
        html += '<p>Curated materials to help you prepare.</p>';

        // Video Section
        html += `<h2 class="subject-header">Video Lessons</h2>`;
        html += '<div class="video-card-container">';
        for (const subjectName in examData.subjects) {
            const videos = examData.subjects[subjectName];
            videos.forEach(video => {
                const difficultyClass = `difficulty-${(video.difficulty || '').toLowerCase()}`;
                const videoLink = video.url || '#';
                html += `
                    <div class="video-card">
                        <h3 class="video-title">${video.title}</h3>
                        <p class="video-channel">By: ${video.channel}</p>
                        <div class="video-meta">
                            <span class="meta-duration">Length: ${video.duration}</span>
                            <span class="meta-difficulty ${difficultyClass}">
                                ${video.difficulty}
                            </span>
                        </div>
                        <a href="${videoLink}" class="video-link" target="_blank" rel="noopener noreferrer">Watch Now</a>
                    </div>
                `;
            });
        }
        html += '</div>'; // Close video-card-container

        // PYQ Section
        if (examData.pyqs && examData.pyqs.length > 0) {
            html += `<h2 class="subject-header">Previous Year Questions (PYQs)</h2>`;
            html += '<div class="pyq-container">';
            examData.pyqs.forEach(yearData => {
                html += `<div class="pyq-year-block">`;
                html += `<h3>${yearData.year} Papers</h3>`;
                html += `<ul class="pyq-paper-list">`;
                yearData.papers.forEach(paper => {
                    const url = paper.url || '#';
                    const subject = paper.subject || 'Paper';
                    html += `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${subject}</a></li>`;
                });
                html += `</ul></div>`;
            });
            html += '</div>';
        }

        resourcesTab.innerHTML = html;
    } else {
        resourcesTab.innerHTML = `
            <h1>Learning Resources</h1>
            <p>Please select your <strong>target exam</strong> from your profile settings to see personalized video resources.</p>
        `;
    }
}

/* --- DYNAMIC WEIGHTAGE CHART FUNCTION --- */
function loadDynamicWeightage() {
    const weightageTab = document.getElementById('weightage');
    const userExam = localStorage.getItem('userExam') || '10th_boards';
    const examData = weightageByExam[userExam];

    if (!weightageTab) return;

    if (examData && examData.subjects) {
        let legendHtml = '';
        let gradientString = 'conic-gradient(';
        let currentPercent = 0;

        examData.subjects.forEach(subject => {
            legendHtml += `
                <li style="--subject-color: ${subject.color};">
                    <span>${subject.name}</span>
                    <strong>${subject.percentage}%</strong>
                </li>
            `;
            const startPercent = currentPercent;
            const endPercent = currentPercent + subject.percentage;
            gradientString += `${subject.color} ${startPercent}% ${endPercent}%, `;
            currentPercent = endPercent;
        });

        gradientString = gradientString.slice(0, -2) + ')';
        const html = `
            <h1>Exam Subject Weightage for ${examData.title}</h1>
            <p>Subject-wise breakdown for your selected exam.</p>
            <div class="weightage-chart-container">
                <div class="doughnut-chart" style="background: ${gradientString};">
                    <div class="doughnut-center-text">
                        Total<br>100%
                    </div>
                </div>
                <ul class="chart-legend">
                    ${legendHtml}
                </ul>
            </div>
        `;
        weightageTab.innerHTML = html;
    } else {
        weightageTab.innerHTML = `
            <h1>Exam Subject Weightage</h1>
            <p>Please select your <strong>target exam</strong> from your profile settings to see a personalized weightage chart.</p>
        `;
    }
}

/* --- GREETING FUNCTIONALITY --- */
function loadGreeting() {
    const userName = localStorage.getItem('userName');
    const greetingElement = document.getElementById('greeting-message');

    if (greetingElement && userName) {
        greetingElement.textContent = `Welcome, ${userName}!`;
    } else if (greetingElement) {
        greetingElement.textContent = 'Welcome, Student!';
    }
}

/* --- (UPGRADED) PROGRESS FUNCTIONALITY --- */
async function loadProgressFromServer() {
    // Optionally attempt to load progress from backend if userEmail exists
    const loggedInEmail = localStorage.getItem('userEmail');
    if (!loggedInEmail) return;
    try {
        const res = await fetch(`https://web-production-7b014.up.railway.app/api/progress/${encodeURIComponent(loggedInEmail)}`);
        if (!res.ok) return;
        const data = await res.json();

        const progressValueEl = document.getElementById("progressValue");
        const quizStatsEl = document.getElementById("quizStats");
        const studyPlanEl = document.getElementById("studyPlanStatus");

        if (progressValueEl && typeof data.progressPercent !== 'undefined') {
            progressValueEl.innerText = `${data.progressPercent}%`;
        }
        if (quizStatsEl && typeof data.quizzesTaken !== 'undefined') {
            quizStatsEl.innerText = `${data.quizzesTaken} Quizzes`;
        }
        if (studyPlanEl && typeof data.studyPlanWeek !== 'undefined') {
            studyPlanEl.innerText = data.studyPlanWeek;
        }
    } catch (err) {
        console.error('Error loading server progress:', err);
    }
}

async function updateProgressToServer(newProgressObj) {
    const loggedInEmail = localStorage.getItem("userEmail");
    if (!loggedInEmail) return;
    try {
        await fetch(`https://web-production-7b014.up.railway.app/api/progress/update/${encodeURIComponent(loggedInEmail)}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProgressObj)
        });
        // refresh UI
        await loadProgressFromServer();
    } catch (err) {
        console.error('Error updating progress to server:', err);
    }
}

/* --- LOCAL PROGRESS UI REFRESH --- */
async function loadProgress() {
    const email = localStorage.getItem("userEmail");
    if(!email){
        console.log("No userEmail stored");
        return;
    }

    try {
        const response = await fetch(`https://web-production-7b014.up.railway.app/api/progress/${email}`);
        const data = await response.json();

        document.getElementById("progressValue").innerText = data.progressPercent + "%";
        document.querySelector(".progress-pie").style.setProperty("--progress", data.progressPercent);

        document.getElementById("quizStats").innerText = data.quizzesTaken + " Quizzes Taken";
        document.getElementById("studyPlanStatus").innerText = data.studyPlanWeek;
    } catch (err) {
        console.log("Progress load failed", err);
    }
}

loadProgress();



    // 2. Get Quizzes Taken
    const quizzesTaken = parseInt(localStorage.getItem('quizzesTaken') || '0', 10);
    const totalQuizzesGoal = 10;
    const quizBarPercentage = Math.min(100, Math.round((quizzesTaken / totalQuizzesGoal) * 100));

    const quizBarFill = document.querySelector('#quizBar');
    const quizStatsLabel = document.getElementById('quizStats');

    if (quizBarFill) {
        quizBarFill.style.setProperty('--progress', quizBarPercentage);
    }
    if (quizStatsLabel) {
        quizStatsLabel.innerText = `${quizzesTaken} / ${totalQuizzesGoal} Quizzes`;
    }

    // 3. Get Study Plan Status
    const planStatus = localStorage.getItem('studyPlanStatus') || 'Not Started';
    const studyPlanElement = document.getElementById('studyPlanStatus');
    if (studyPlanElement) {
        studyPlanElement.innerText = planStatus;
    }

    // Try server-loaded progress as well (non-blocking)
    loadProgressFromServer();

    console.log("Progress updated:", { videosWatched, quizzesTaken, planStatus });



/* --- SETTINGS FORM POPULATOR --- */
function populateSettingsForm() {
    const nameEl = document.getElementById('settings-name');
    const gradeEl = document.getElementById('settings-grade');
    const examEl = document.getElementById('settings-exam');

    if (nameEl) nameEl.value = localStorage.getItem('userName') || '';
    if (gradeEl) gradeEl.value = localStorage.getItem('userGrade') || '10';
    if (examEl) examEl.value = localStorage.getItem('userExam') || '10th_boards';
}

/* --- THEME-SETTING FUNCTION --- */
(function applyTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
    }
})();

// =========================================================
// 3. MAIN SCRIPT LOGIC (Runs after page loads)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. PROFILE SETUP MODAL LOGIC ---
    const modal = document.getElementById('profile-setup-modal');
    const setupForm = document.getElementById('profile-setup-form');
    const profileIsSet = localStorage.getItem('profileSetupComplete');

    if (!profileIsSet && modal) {
        modal.style.display = 'flex';
    }

    if (setupForm) {
        setupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userName = document.getElementById('user-name')?.value || '';
            const grade = document.getElementById('grade')?.value || '';
            const exam = document.getElementById('target-exam')?.value || '';

            localStorage.setItem('userName', userName);
            localStorage.setItem('userGrade', grade);
            localStorage.setItem('userExam', exam);
            localStorage.setItem('profileSetupComplete', 'true');

            console.log('Profile Saved:', { userName, grade, exam });
            if (modal) modal.style.display = 'none';

            loadDynamicResources();
            loadDynamicWeightage();
            loadGreeting();
            loadProgress();
            populateSettingsForm();
        });
    }

    // --- 2. DASHBOARD TAB NAVIGATION LOGIC ---
    const navLinks = document.querySelectorAll('.dashboard-nav a');
    const tabPanes = document.querySelectorAll('.dashboard-tab-content .tab-pane');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTabId = link.getAttribute('data-tab');
            const targetPane = document.getElementById(targetTabId);

            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');

            tabPanes.forEach(pane => pane.classList.remove('active'));
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // --- 3. SETTINGS PAGE LOGIC ---
    const updateForm = document.getElementById('update-profile-form');
    const themeToggle = document.getElementById('theme-toggle');
    const resetBtn = document.getElementById('reset-profile-btn');
    const saveSuccessMsg = document.getElementById('save-success-message');

    if (updateForm) {
        updateForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const userName = document.getElementById('settings-name')?.value || '';
            const grade = document.getElementById('settings-grade')?.value || '';
            const exam = document.getElementById('settings-exam')?.value || '';

            localStorage.setItem('userName', userName);
            localStorage.setItem('userGrade', grade);
            localStorage.setItem('userExam', exam);

            console.log('Profile Updated:', { userName, grade, exam });

            loadDynamicResources();
            loadDynamicWeightage();
            loadGreeting();

            if (saveSuccessMsg) {
                saveSuccessMsg.style.display = 'block';
                setTimeout(() => {
                    saveSuccessMsg.style.display = 'none';
                }, 2000);
            }
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            localStorage.removeItem('videosWatched');
            localStorage.removeItem('quizzesTaken');
            localStorage.removeItem('studyPlanStatus');
            localStorage.clear();
            location.reload();
        });
    }

    if (themeToggle) {
        themeToggle.checked = (localStorage.getItem('theme') === 'dark');
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                document.documentElement.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- 4. INITIAL PAGE LOAD ---
    loadDynamicResources();
    loadDynamicWeightage();
    loadGreeting();
    loadProgress();
    populateSettingsForm();

    // --- 5. AI STUDY PLAN LOGIC (Uses server.js) ---
    const generateBtn = document.getElementById('generate-plan-btn');
    const planContent = document.getElementById('plan-content');
    const planLoading = document.getElementById('plan-loading');

    if (generateBtn) {
        generateBtn.addEventListener('click', async () => {
            if (!planContent || !planLoading) return;
            planContent.innerHTML = '';
            planLoading.style.display = 'block';
            generateBtn.disabled = true;

            try {
                const grade = localStorage.getItem('userGrade');
                const exam = localStorage.getItem('userExam');
                const weakTopics = ['Calculus', 'Thermodynamics'];

                const response = await fetch('http://localhost:3000/api/generate-plan', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ grade, exam, topics: weakTopics })
                });

                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                planContent.innerHTML = data.planHtml || '<p>No plan returned.</p>';

                localStorage.setItem('studyPlanStatus', 'In Progress');
                loadProgress();

            } catch (error) {
                console.error('Error generating plan:', error);
                planContent.innerHTML = '<p style="color: red;">Sorry, an error occurred. Please try again.</p>';
            } finally {
                planLoading.style.display = 'none';
                generateBtn.disabled = false;
            }
        });
    }

    // --- 6. AI QUIZ GENERATION LOGIC (Uses server.js) ---
    const quizForm = document.getElementById('quiz-setup-form');
    const quizContent = document.getElementById('quiz-content');
    const quizLoading = document.getElementById('quiz-loading');
    const quizResults = document.getElementById('quiz-results');
    const quizTopicInput = document.getElementById('quiz-topic');

    let currentQuizData = [];

    if (quizForm) {
        quizForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const topic = quizTopicInput?.value?.trim();
            if (!topic) return;

            const exam = localStorage.getItem('userExam') || 'general';

            if (quizContent) quizContent.innerHTML = '';
            if (quizResults) quizResults.innerHTML = '';
            if (quizLoading) quizLoading.style.display = 'block';
            const submitBtn = quizForm.querySelector('button');
            if (submitBtn) submitBtn.disabled = true;

            try {
                const response = await fetch('http://localhost:3000/api/generate-quiz', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ topic, exam })
                });

                if (!response.ok) throw new Error('Server returned an error');
                const quizData = await response.json();
                currentQuizData = Array.isArray(quizData) ? quizData : [];
                buildQuiz(currentQuizData);

            } catch (error) {
                console.error('Error generating quiz:', error);
                if (quizContent) quizContent.innerHTML = '<p style="color: red;">Sorry, an error occurred. Please try again.</p>';
            } finally {
                if (quizLoading) quizLoading.style.display = 'none';
                if (submitBtn) submitBtn.disabled = false;
            }
        });
    }

    function buildQuiz(quizData) {
        if (!quizContent) return;
        quizContent.innerHTML = '';

        quizData.forEach((questionData, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question-block');

            const questionTitle = document.createElement('h3');
            questionTitle.textContent = `${index + 1}. ${questionData.question}`;
            questionElement.appendChild(questionTitle);

            const optionsContainer = document.createElement('div');
            optionsContainer.classList.add('options-container');

            (questionData.options || []).forEach(option => {
                const label = document.createElement('label');
                label.classList.add('option-label');

                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `question-${index}`;
                radio.value = option;

                const optionText = document.createElement('span');
                optionText.textContent = option;

                label.appendChild(radio);
                label.appendChild(optionText);
                optionsContainer.appendChild(label);
            });

            questionElement.appendChild(optionsContainer);
            quizContent.appendChild(questionElement);
        });

        const submitButton = document.createElement('button');
        submitButton.id = 'submit-quiz-btn';
        submitButton.textContent = 'Submit Quiz';
        submitButton.classList.add('login-button');
        submitButton.style.marginTop = '1.5rem';
        quizContent.appendChild(submitButton);

        submitButton.addEventListener('click', checkAnswers);
    }

    function checkAnswers() {
        let score = 0;
        const totalQuestions = currentQuizData.length;

        currentQuizData.forEach((questionData, index) => {
            const selected = document.querySelector(`input[name="question-${index}"]:checked`);
            if (selected && selected.value === questionData.answer) {
                score++;
            }
        });

        if (quizResults) {
            quizResults.innerHTML = `
                <h3>Quiz Complete!</h3>
                <p>You scored <strong>${score} out of ${totalQuestions}</strong>.</p>
            `;
        }
        if (quizContent) quizContent.innerHTML = '';

        let quizzesTaken = parseInt(localStorage.getItem('quizzesTaken') || '0', 10);
        quizzesTaken++;
        localStorage.setItem('quizzesTaken', String(quizzesTaken));

        loadProgress();
    }

    // --- 7. (NEW) ADD CLICK LISTENER FOR VIDEO TRACKING ---
    const resourcesTab = document.getElementById('resources');
    if (resourcesTab) {
        resourcesTab.addEventListener('click', (e) => {
            const target = e.target;
            if (!(target instanceof Element)) return;
            if (target.classList.contains('video-link')) {
                let videosWatched = parseInt(localStorage.getItem('videosWatched') || '0', 10);
                videosWatched++;
                localStorage.setItem('videosWatched', String(videosWatched));
                loadProgress();
                // link opens naturally
            }
        });
    }

    // --- 8. (NEW) STANDALONE CHATBOT LOGIC ---
    // Do NOT store real API keys in client-side code. Use server-side proxy instead.
    const chatbotApiKey = "AIzaSyCBp2VyWJSIAf4L_9SrsrwuzmZ7MeD-WbI"; // replace via server or environment
    const chatbotApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${chatbotApiKey}`;

    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendButton = document.getElementById('chatbot-send-button');
    const chatbotMessageList = document.getElementById('message-list');
    const chatbotMainContent = document.getElementById('chat-main-content');
    const chatbotWelcomeScreen = document.getElementById('welcome-screen');

    let chatbotHistory = [];
    let isChatbotGenerating = false;
    const chatbotOriginalPlaceholder = "Ask a question...";

    if (chatbotForm) {
        chatbotForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (isChatbotGenerating) return;

            const query = chatbotInput?.value?.trim();
            if (!query) return;

            isChatbotGenerating = true;
            if (chatbotSendButton) chatbotSendButton.disabled = true;
            if (chatbotInput) {
                chatbotInput.placeholder = "Thinking...";
                chatbotInput.blur();
            }

            if (chatbotInput) chatbotInput.value = '';

            chatbotHistory.push({ role: "user", parts: [{ text: query }] });
            renderChatbotMessage(query, 'user');

            try {
                const payload = {
                    contents: chatbotHistory,
                    systemInstruction: {
                        parts: [{ text: "You are a helpful study assistant. Be concise and friendly." }]
                    }
                };

                const response = await fetch(chatbotApiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    if (response.status === 400) {
                        const errorData = await response.json();
                        if (errorData?.error?.message?.includes("API key not valid")) {
                            throw new Error("API_KEY_INVALID");
                        }
                    }
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                const botResponseText = result.candidates?.[0]?.content?.parts?.[0]?.text;

                if (botResponseText) {
                    renderChatbotMessage(botResponseText, 'bot');
                    chatbotHistory.push({ role: "model", parts: [{ text: botResponseText }] });
                } else {
                    renderChatbotMessage("Sorry, I received an empty response.", 'bot');
                    chatbotHistory.pop();
                }

            } catch (error) {
                console.error("Chatbot API Error:", error);
                if (error?.message === "API_KEY_INVALID") {
                    renderChatbotMessage("❌ Error: The Chatbot API key is invalid. Please update it in dashboard.js (or better: use a server-side proxy).", 'bot');
                } else {
                    renderChatbotMessage("❌ Error connecting to the AI. Please try again.", 'bot');
                }
                chatbotHistory.pop();
            } finally {
                isChatbotGenerating = false;
                if (chatbotSendButton) chatbotSendButton.disabled = false;
                if (chatbotInput) {
                    chatbotInput.placeholder = chatbotOriginalPlaceholder;
                    chatbotInput.focus();
                }
            }
        });
    }

    function renderChatbotMessage(text, sender) {
        if (!chatbotMessageList || !chatbotMainContent) return;

        if (chatbotWelcomeScreen && chatbotWelcomeScreen.style.display !== 'none') {
            chatbotWelcomeScreen.style.display = 'none';
        }

        const isUser = sender === 'user';
        const messageWrapper = document.createElement('div');
        messageWrapper.className = `flex ${isUser ? 'justify-end' : 'justify-start'}`;

        const messageBubble = document.createElement('div');
        messageBubble.className = `max-w-xs sm:max-w-md p-3 rounded-xl shadow-md ${isUser ? 'user-message' : 'bot-message'}`;

        const safeText = String(text || '').replace(/\n/g, '<br>');
        messageBubble.innerHTML = safeText;

        messageWrapper.appendChild(messageBubble);
        chatbotMessageList.appendChild(messageWrapper);

        // Auto-scroll
        chatbotMainContent.scrollTop = chatbotMainContent.scrollHeight;
    }

});