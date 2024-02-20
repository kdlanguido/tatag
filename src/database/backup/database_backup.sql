-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2024 at 08:56 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projects_scmgmt`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_quiz`
--

CREATE TABLE `tbl_quiz` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` longtext NOT NULL,
  `time_open` date NOT NULL,
  `time_close` date NOT NULL,
  `time_limit` int(11) NOT NULL,
  `attempts_allowed` int(11) NOT NULL,
  `is_archived` int(11) NOT NULL,
  `is_hidden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_quiz`
--

INSERT INTO `tbl_quiz` (`id`, `name`, `description`, `time_open`, `time_close`, `time_limit`, `attempts_allowed`, `is_archived`, `is_hidden`) VALUES
(2, 'Checkpoint Quiz 1', '<p>test</p>', '2023-11-21', '2023-12-05', 1, 2, 0, 0),
(3, 'Checkpoint Quiz 2', '<p>test 2</p>', '2023-10-23', '2023-12-05', 60, 1, 1, 0),
(4, 'Checkpoint Quiz 3', '<p>test</p>', '2023-10-03', '2023-10-04', 30, 1, 1, 0),
(9, 'REACT.js Quiz 1', '<p><br></p>', '2023-12-06', '2023-12-07', 5, 1, 0, 0),
(10, 'Algebra Quiz 1', '<div>Checkpoint Quiz 1</div>', '2024-01-05', '2024-01-05', 1, 1, 0, 0),
(11, 'Quiz 1 ', '<p>Test quiz description</p>', '2024-01-11', '2024-01-11', 1, 2, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_quiz_items`
--

CREATE TABLE `tbl_quiz_items` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `mark` int(11) NOT NULL,
  `correct_answer` text NOT NULL,
  `quiz_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_quiz_items`
--

INSERT INTO `tbl_quiz_items` (`id`, `question`, `mark`, `correct_answer`, `quiz_id`) VALUES
(10, '<p>What is Javascript?</p>', 2, '14', 2),
(11, '<p>Who invented javascript?</p>', 2, '50', 2),
(18, '<p>Who uses javascript?</p>', 2, '39', 2),
(19, '<p>Why do we need javascript?</p>', 2, '42', 2),
(21, '<p>Do you like science?</p>', 10, '51', 3),
(22, '<p><span style=\"color: rgb(64, 71, 86);\">This markup syntax is called ____ ? </span></p>', 2, '56', 9),
(23, '<p>What is React?</p>', 2, '58', 9),
(24, '<p>What is the mother language of React.JS? </p>', 2, '60', 9),
(25, '<p>Who uses React.JS? </p>', 2, '64', 9),
(26, '<p>Can i write mark-up using JSX?</p>', 2, '68', 9),
(27, '<div>Test Question</div>', 10, '70', 2),
(28, '<div><span style=\"color: rgb(51, 51, 51);\">The basic ways of presenting the unknown values as variables help to create mathematical expressions is called?</span></div>', 2, '71', 10),
(29, '<div><span style=\"color: rgb(51, 51, 51);\">All the other mathematical forms involving trigonometry,&nbsp;</span><a href=\"https://www.cuemath.com/calculus/\" target=\"_blank\" style=\"color: rgb(1, 165, 242);\">calculus</a><span style=\"color: rgb(51, 51, 51);\">,&nbsp;</span><a href=\"https://www.cuemath.com/geometry/coordinate-geometry/\" target=\"_blank\" style=\"color: rgb(1, 165, 242);\">coordinate geometry</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;involving algebraic expressions can be accounted as ________.</span></div>', 2, '78', 10),
(30, '<div><span style=\"color: rgb(51, 51, 51);\">_______ deals with the use of abstract concepts like groups, rings, vectors rather than simple mathematical number systems. Rings are a simple level of abstraction found by writing the addition and multiplication properties together.&nbsp;</span></div>', 2, '81', 10),
(31, '<div><span style=\"color: rgb(51, 51, 51);\">_______ deals with solving the algebraic expressions for a viable answer. In elementary algebra, simple variables like x, y, are represented in the form of an equation.</span></div>', 2, '84', 10),
(32, '<p><u style=\"color: rgb(45, 45, 45);\">______</u><span style=\"color: rgb(45, 45, 45);\"> is a test of skills rather than being a test of knowledge. Some commonly asked questions in verbal reasoning are decoding codes based on numbers and words, spotting letter differences, order and ranking, among others.</span></p>', 10, '87', 11),
(33, '<p><span style=\"color: rgb(45, 45, 45);\">It helps in understanding how you deduce and induce logic to solve problems.</span></p>', 10, '90', 11);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_quiz_options`
--

CREATE TABLE `tbl_quiz_options` (
  `id` int(11) NOT NULL,
  `option_value` text NOT NULL,
  `quiz_question_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_quiz_options`
--

INSERT INTO `tbl_quiz_options` (`id`, `option_value`, `quiz_question_id`) VALUES
(13, 'Computer Language', 10),
(14, 'Programming Language', 10),
(32, 'Scripting Language', 10),
(36, 'Mark Zuckerberg', 11),
(37, 'Test', 17),
(38, 'Test 2', 17),
(39, 'Web Developers', 18),
(40, 'Software Engineers', 18),
(41, 'Ben Ten', 11),
(42, 'For better coding scheme', 19),
(44, 'No we don\'t need javascript, test', 19),
(45, 'Data encoder', 18),
(46, 'Ajinomoto Instant', 20),
(47, 'Artificial Interactive', 20),
(48, 'Artificial Intelligence', 20),
(49, 'Artificial Intelligent', 20),
(50, 'Brendan Eich', 11),
(51, 'Yes', 21),
(52, 'No', 21),
(53, 'JXS', 22),
(54, 'XSJ', 22),
(55, 'JJS', 22),
(56, 'JSX', 22),
(58, 'Javascript Framework', 23),
(59, 'Just a new trend', 23),
(60, 'Javascript', 24),
(61, 'PHP', 24),
(62, 'JSON', 24),
(63, 'C#', 24),
(64, 'Web Developers', 25),
(65, 'Carpenters', 25),
(66, 'IT', 25),
(67, 'Teachers', 25),
(68, 'Yes', 26),
(69, 'No', 26),
(70, 'test', 27),
(71, 'Pre-algebra', 28),
(72, 'Elementary Algebra', 28),
(73, 'Abstract Algebra', 28),
(74, 'Universal Algebra', 28),
(75, 'Pre-algebra', 29),
(76, 'Elementary Algebra', 29),
(77, 'Abstract Algebra', 29),
(78, 'Universal Algebra', 29),
(79, 'Pre-algebra', 30),
(80, 'Elementary Algebra', 30),
(81, 'Abstract Algebra', 30),
(82, 'Universal Algebra', 30),
(83, 'Pre-algebra', 31),
(84, 'Elementary Algebra', 31),
(85, 'Abstract Algebra', 31),
(86, 'Universal Algebra', 31),
(87, 'Verbal reasoning', 32),
(88, 'Non-verbal reasoning', 32),
(89, 'Verbal reasoning', 33),
(90, 'Non-verbal reasoning', 33);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sections`
--

CREATE TABLE `tbl_sections` (
  `id` int(11) NOT NULL,
  `adviser` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `grade_level` int(11) NOT NULL,
  `strand` varchar(200) NOT NULL,
  `semester` int(11) NOT NULL,
  `is_archived` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_sections`
--

INSERT INTO `tbl_sections` (`id`, `adviser`, `name`, `grade_level`, `strand`, `semester`, `is_archived`) VALUES
(18, '18', 'ICT-A1', 11, '3', 1, 0),
(19, '25', 'ICT-B1', 12, '7', 2, 0),
(20, '26', 'Argon', 7, '1', 0, 0),
(22, '18', 'CULARTS-A1', 11, '9', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_section_schedule`
--

CREATE TABLE `tbl_section_schedule` (
  `id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `subject` varchar(200) NOT NULL,
  `teacher` varchar(200) NOT NULL,
  `day` varchar(200) NOT NULL,
  `time` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_section_schedule`
--

INSERT INTO `tbl_section_schedule` (`id`, `section_id`, `subject`, `teacher`, `day`, `time`) VALUES
(16, 20, '12', '18', 'M,W', '13:00 - 14:30,14:00 - 15:30'),
(17, 20, '18', '25', 'M,T', '15:00 - 16:30,13:30 - 15:00'),
(18, 20, '19', '18', 'W,S', '16:00 - 17:30,8:00 - 9:30'),
(19, 20, '20', '26', 'M,W', '9:30 - 11:00,10:00 - 11:30'),
(20, 18, '32', '18', 'M,T', '13:00 - 14:00,15:00 - 16:30'),
(21, 18, '34', '25', 'W,S', '10:00 - 11:30,13:00 - 14:30'),
(22, 18, '35', '26', 'T,TH', '7:00 - 8:30,9:00 - 10:30'),
(23, 22, '39', '18', 'M,S', '10:00 - 11:30,17:00 - 19:30'),
(24, 22, '40', '27', 'M,T', '10:00 - 11:30,8:30 - 10:00'),
(25, 22, '41', '18', 'W', '9:00 - 10:30'),
(26, 22, '42', '18', 'M,T', '8:30 - 10:00,8:30 - 10:00'),
(27, 22, '43', '26', 'F', '9:30 - 11:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_section_students`
--

CREATE TABLE `tbl_section_students` (
  `id` int(11) NOT NULL,
  `lrn` int(11) NOT NULL,
  `section_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_section_students`
--

INSERT INTO `tbl_section_students` (`id`, `lrn`, `section_id`) VALUES
(7, 20230001, 18),
(8, 20230002, 18),
(9, 20230015, 22);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_staffs`
--

CREATE TABLE `tbl_staffs` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `middlename` varchar(50) NOT NULL,
  `birthdate` date NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile_no` varchar(50) NOT NULL,
  `add_st` varchar(50) NOT NULL,
  `add_city` varchar(50) NOT NULL,
  `add_state` varchar(50) NOT NULL,
  `zip_code` varchar(50) NOT NULL,
  `e_name` varchar(50) NOT NULL,
  `e_contact` varchar(50) NOT NULL,
  `e_relationship` varchar(50) NOT NULL,
  `photo_dir` text NOT NULL,
  `date_joined` date DEFAULT current_timestamp(),
  `is_archived` int(11) NOT NULL DEFAULT 0,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_staffs`
--

INSERT INTO `tbl_staffs` (`id`, `firstname`, `lastname`, `middlename`, `birthdate`, `age`, `gender`, `email`, `mobile_no`, `add_st`, `add_city`, `add_state`, `zip_code`, `e_name`, `e_contact`, `e_relationship`, `photo_dir`, `date_joined`, `is_archived`, `role`) VALUES
(1, 'Joaquin', 'Bordado', '', '1977-09-12', 45, 'male', 'jbordado@gmail.com', '09171988549', 'Mabolo', 'Tuguegarao', 'Calm State', '1099', 'Rekka', '09881099374', 'spouse', '', '2023-09-12', 0, 'security guard'),
(2, 'Christian', 'Mendez', '', '1982-06-08', 41, 'male', 'mendezx@gmail.com', '09171086975', 'Mabolo', 'Batangas', 'United States', '982', 'Bernabe Mendez', '09828840981', 'Spouse', '', '2023-09-13', 0, 'Security Guard'),
(6, 'Jasmyn Icee', 'Languido', 'Cancino', '2003-09-18', 19, 'female', 'jasmynicee@gmail.com', '09171086975', '5 Scorpion Palar ', 'Taguig', 'United States', '982', 'King Dranreb Languido', '09828840981', 'Spouse', 'src/public/user_pics/us_4436joaquin.png', '2023-09-14', 0, 'administrator');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_strands`
--

CREATE TABLE `tbl_strands` (
  `id` int(11) NOT NULL,
  `grade_level` int(11) NOT NULL,
  `strand` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_strands`
--

INSERT INTO `tbl_strands` (`id`, `grade_level`, `strand`) VALUES
(3, 11, 'Science, Technology, Engineering and Mathematics Strand (STEM)'),
(7, 12, 'Information & Communication Technology (ICT)'),
(9, 11, 'Culinary Arts');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student_applications`
--

CREATE TABLE `tbl_student_applications` (
  `id` int(11) NOT NULL,
  `lrn` varchar(50) NOT NULL,
  `school_year` varchar(50) NOT NULL,
  `strand_code` varchar(50) NOT NULL,
  `grade_level` varchar(50) NOT NULL,
  `semester` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_student_applications`
--

INSERT INTO `tbl_student_applications` (`id`, `lrn`, `school_year`, `strand_code`, `grade_level`, `semester`, `status`) VALUES
(20, '20230001', '6', '3', '11', '1st', 'admitted'),
(22, '20230002', '6', '3', '11', '1st', 'admitted'),
(23, '20230003', '6', '3', '11', '1st', 'cancelled'),
(24, '20230004', '6', '3', '11', '1st', 'pending'),
(25, '20230015', '6', '9', '11', '1st', 'admitted');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student_attachments`
--

CREATE TABLE `tbl_student_attachments` (
  `id` int(11) NOT NULL,
  `lrn` int(11) NOT NULL,
  `document_name` varchar(50) NOT NULL,
  `document_dir` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_student_attachments`
--

INSERT INTO `tbl_student_attachments` (`id`, `lrn`, `document_name`, `document_dir`, `status`) VALUES
(76, 20230001, 'SF9', 'src/public/students_sf9/u_1272sys.txt', 'approved'),
(77, 20230001, 'SF10', 'src/public/students_sf10/u_1272sys.txt', 'approved'),
(78, 20230001, 'NSO', 'src/public/students_nso/u_1272sys.txt', 'approved'),
(79, 20230001, 'Certificate of Good Moral Character', 'src/public/students_gmc/u_1272sys.txt', 'approved'),
(80, 20230001, '2x2 photo', 'src/public/students_photo/u_41391_heavy-right.png', 'approved'),
(86, 20230002, 'SF9', 'src/public/students_sf9/u_1883sys.txt', 'approved'),
(87, 20230002, 'SF10', 'src/public/students_sf10/u_1883sys.txt', 'approved'),
(88, 20230002, 'NSO', 'src/public/students_nso/u_1883sys.txt', 'approved'),
(89, 20230002, 'Certificate of Good Moral Character', 'src/public/students_gmc/u_1883sys.txt', 'approved'),
(90, 20230002, '2x2 photo', 'src/public/students_photo/u_1883tatag.png', 'approved'),
(91, 20230003, 'SF9', 'src/public/students_sf9/u_3839sys.txt', 'for_approval'),
(92, 20230003, 'SF10', 'src/public/students_sf10/u_3839sys.txt', 'for_approval'),
(93, 20230003, 'NSO', 'src/public/students_nso/u_3839sys.txt', 'for_approval'),
(94, 20230003, 'Certificate of Good Moral Character', 'src/public/students_gmc/u_3839sys.txt', 'for_approval'),
(95, 20230003, '2x2 photo', 'src/public/students_photo/u_3839qwe.png', 'for_approval'),
(96, 20230004, 'SF9', 'src/public/students_sf9/u_6211qwe.png', 'for_approval'),
(97, 20230004, 'SF10', 'src/public/students_sf10/u_6211qwe.png', 'for_approval'),
(98, 20230004, 'NSO', 'src/public/students_nso/u_6211qwe.png', 'for_approval'),
(99, 20230004, 'Certificate of Good Moral Character', 'src/public/students_gmc/u_6211qwe.png', 'for_approval'),
(100, 20230004, '2x2 photo', 'src/public/students_photo/u_6211qwe.png', 'for_approval'),
(101, 20230015, 'SF9', 'src/public/students_sf9/u_44081.png', 'approved'),
(102, 20230015, 'SF10', 'src/public/students_sf10/u_44081.png', 'approved'),
(103, 20230015, 'NSO', 'src/public/students_nso/u_44084.png', 'approved'),
(104, 20230015, 'Certificate of Good Moral Character', 'src/public/students_gmc/u_44081.png', 'approved'),
(105, 20230015, '2x2 photo', 'src/public/students_photo/u_9472tatag.png', 'approved');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student_cards`
--

CREATE TABLE `tbl_student_cards` (
  `id` int(11) NOT NULL,
  `lrn` int(11) NOT NULL,
  `grade_level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_student_cards`
--

INSERT INTO `tbl_student_cards` (`id`, `lrn`, `grade_level`) VALUES
(4, 20230001, 11),
(5, 20230002, 11),
(8, 20230015, 11);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student_enrollments`
--

CREATE TABLE `tbl_student_enrollments` (
  `id` int(11) NOT NULL,
  `lrn` int(11) NOT NULL,
  `enrollment_id` int(11) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'pending',
  `date_enrolled` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_student_enrollments`
--

INSERT INTO `tbl_student_enrollments` (`id`, `lrn`, `enrollment_id`, `status`, `date_enrolled`) VALUES
(10, 20230001, 11, 'enrolled', '2023-11-13'),
(11, 20230002, 11, 'enrolled', '2023-11-13'),
(14, 20230015, 11, 'enrolled', '2023-12-08');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student_grades`
--

CREATE TABLE `tbl_student_grades` (
  `id` int(11) NOT NULL,
  `card_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `grade` varchar(5) NOT NULL,
  `term` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_student_grades`
--

INSERT INTO `tbl_student_grades` (`id`, `card_id`, `subject_id`, `grade`, `term`) VALUES
(24, 4, 32, '70', 1),
(25, 4, 32, '90', 2),
(26, 4, 32, '80', 3),
(27, 4, 32, '90', 4),
(28, 4, 32, '84', 5),
(29, 5, 32, '80', 1),
(30, 5, 32, '0', 2),
(31, 5, 32, '0', 3),
(32, 5, 32, '0', 4),
(33, 5, 32, '16', 5),
(34, 4, 34, '90', 1),
(35, 4, 34, '90', 2),
(36, 4, 34, '90', 3),
(37, 4, 34, '90', 4),
(38, 4, 34, '90', 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student_information`
--

CREATE TABLE `tbl_student_information` (
  `id` int(11) NOT NULL,
  `lrn` int(11) NOT NULL,
  `birthdate` date NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `middlename` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile_no` varchar(50) NOT NULL,
  `add_st` varchar(50) NOT NULL,
  `add_city` varchar(50) NOT NULL,
  `add_state` varchar(50) NOT NULL,
  `add_zipcode` varchar(50) NOT NULL,
  `guardian_name` varchar(50) NOT NULL,
  `guardian_no` varchar(50) NOT NULL,
  `is_archived` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_student_information`
--

INSERT INTO `tbl_student_information` (`id`, `lrn`, `birthdate`, `lastname`, `firstname`, `middlename`, `age`, `gender`, `email`, `mobile_no`, `add_st`, `add_city`, `add_state`, `add_zipcode`, `guardian_name`, `guardian_no`, `is_archived`) VALUES
(9, 20230001, '1998-11-07', 'Ignacio', 'Iverson', '', 24, 'male', 'iver.0091@gmail.com', '09172998192', '928 Fox street', 'Taguig City', 'Metro Manila', '9928', 'Dupi Ignacio', '09882773812', 0),
(11, 20230002, '1988-11-07', 'Languido', 'Jasmyn Icee', 'Cancino', 34, 'female', 'jasmyniceelanguido@gmail.com', '0912881023', '225 scorpion street', 'taguig city', 'metro manila', '1482', 'king dranreb languido', '09177288301', 0),
(12, 20230003, '1998-02-17', 'Samson', 'Jheremy', '', 25, 'male', 'jhemsamson@gmail.com', '0992282812', '2 blk 3 lot MRB Condominium', 'Taguig', 'Metro Manila', '2293', 'Rafsamson@gmail.com', '0919998383', 0),
(13, 20230004, '1988-06-17', 'Smith', 'Joshua', '', 35, 'male', 'joshuasmith@gmail.com', '09188277422', '22 mt. apo', 'taguig', 'metro manila', '9928', 'Belly Smith', '092827757781', 0),
(14, 20230015, '1998-12-08', 'Masako', 'Izikana', '', 24, 'female', 'student2@gmail.com', '09171077268', 'Alligator', 'Tagum', 'United State', '9288', 'Mina Shinichi', '09199288399', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student_quiz`
--

CREATE TABLE `tbl_student_quiz` (
  `id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `lrn` int(11) NOT NULL,
  `attempts` int(11) NOT NULL,
  `attempt_started` timestamp NOT NULL DEFAULT current_timestamp(),
  `date_updated` timestamp NULL DEFAULT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'pending',
  `marks` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_student_quiz`
--

INSERT INTO `tbl_student_quiz` (`id`, `quiz_id`, `lrn`, `attempts`, `attempt_started`, `date_updated`, `status`, `marks`) VALUES
(280, 2, 20230001, 1, '2023-12-05 07:59:35', '2023-12-05 08:01:38', 'completed', 8),
(286, 3, 20230001, 1, '2023-12-05 09:13:37', '2023-12-05 09:13:42', 'completed', 10),
(287, 9, 20230001, 1, '2023-12-06 06:40:47', '2023-12-06 06:41:22', 'completed', 10),
(372, 10, 20230001, 1, '2024-01-11 05:22:28', '2024-01-11 05:22:36', 'completed', 4),
(380, 11, 20230001, 1, '2024-01-11 05:54:05', '2024-01-11 05:57:35', 'completed', 10),
(381, 11, 20230001, 1, '2024-01-11 05:57:35', '2024-01-11 06:02:11', 'completed', 20);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student_quiz_answer_sheet`
--

CREATE TABLE `tbl_student_quiz_answer_sheet` (
  `id` int(11) NOT NULL,
  `lrn` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `quiz_question_id` int(11) NOT NULL,
  `option_id` int(11) NOT NULL,
  `date_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_subjects`
--

CREATE TABLE `tbl_subjects` (
  `id` int(11) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `strand` int(11) DEFAULT NULL,
  `semester` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_subjects`
--

INSERT INTO `tbl_subjects` (`id`, `subject`, `strand`, `semester`) VALUES
(12, 'Filipino', 1, 0),
(13, 'Advance Math', 6, 0),
(15, 'Advance Math 4', 3, 2),
(18, 'English', 1, 0),
(19, 'Mathematics', 1, 0),
(20, 'Science', 1, 0),
(21, 'Aralin Panlipunan (AP)', 1, 0),
(22, 'MAPEH', 1, 0),
(23, 'Edukasyon sa Pagpapakatao (EsP)', 1, 0),
(24, 'Computer Networks', 7, 1),
(26, 'Computer Networks 2', 7, 2),
(27, 'Software Engineering 2', 7, 2),
(28, 'Software Engineering 1', 7, 1),
(29, 'Advance Database Systems', 7, 1),
(30, 'Advance Database Systems 2', 7, 2),
(31, 'OJT', 7, 2),
(32, 'STS 1', 3, 1),
(33, 'STS 2', 3, 2),
(34, 'Advance Math', 3, 1),
(35, 'Logical Thinking', 3, 1),
(38, 'Test subject', 8, 1),
(39, 'General Mathematics', 9, 1),
(40, 'Oral Communication', 9, 1),
(41, 'English for Academic and Professional Purposes', 9, 1),
(42, 'Personal Development', 9, 1),
(43, 'Komunikasyon at Pananaliksik', 9, 1),
(44, 'PE and Health I', 9, 1),
(45, 'Pagsulat sa Filipino sa Piling Larangan', 9, 1),
(46, 'Cookery NC II', 9, 1),
(47, 'Statistics & Probability', 9, 2),
(48, 'Reading & Writing Skills', 9, 2),
(49, '21st Century Literature', 9, 2),
(50, 'Understanding Culture, Society & Politics', 9, 2),
(51, 'Pagbasa at Pagsusuri', 9, 2),
(52, 'PE and Health 2', 9, 2),
(53, 'Practical Research I', 9, 2),
(54, 'Cookery NC II', 9, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_subject_topics`
--

CREATE TABLE `tbl_subject_topics` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` longtext NOT NULL,
  `subject_id` int(11) NOT NULL,
  `is_archived` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_subject_topics`
--

INSERT INTO `tbl_subject_topics` (`id`, `name`, `description`, `subject_id`, `is_archived`) VALUES
(1, 'Computer Programming', '<p>Computer programming is the process of writing code to facilitate specific actions in a computer, application or software program, and instructs them on how to perform.</p>', 32, 0),
(2, 'test', '<p>test</p>', 32, 1),
(3, 'Database Management Systems', '<p>Database management system is an integration of PHPMYADMIN and MySQL topic</p>', 32, 0),
(4, 'ReactJS ', '<p>React JS is a library framework of javascript</p>', 32, 0),
(5, '', '<p><br></p>', 32, 1),
(6, 'Basic Math', '<p>This is a sample description</p>', 39, 0),
(7, 'Figures of Speech', '<div>What is figures of speech?</div>', 40, 0),
(8, 'Algrebra', '<div>the part of mathematics in which letters and other general symbols are used to represent numbers and quantities in formulae and equations.</div>', 34, 0),
(9, 'Logical Reasoning Topics With Helpful Example Answers', '<p><span style=\"color: rgb(45, 45, 45);\">Logical reasoning questions help employers understand your thought process and gauge your ability to process complex information.&nbsp;</span></p>', 35, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_subject_topic_items`
--

CREATE TABLE `tbl_subject_topic_items` (
  `id` int(11) NOT NULL,
  `item_category` varchar(200) NOT NULL,
  `item_parent_tbl_id` int(11) NOT NULL,
  `subject_topic_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_subject_topic_items`
--

INSERT INTO `tbl_subject_topic_items` (`id`, `item_category`, `item_parent_tbl_id`, `subject_topic_id`) VALUES
(2, 'quiz', 2, 1),
(3, 'quiz', 3, 1),
(4, 'quiz', 4, 1),
(13, 'file', 6, 1),
(14, 'file', 7, 1),
(15, 'file', 8, 1),
(16, 'file', 9, 1),
(17, 'file', 10, 1),
(18, 'file', 11, 1),
(19, 'file', 11, 1),
(20, 'file', 11, 1),
(21, 'page', 1, 1),
(22, 'page', 2, 1),
(23, 'page', 3, 1),
(24, 'page', 4, 4),
(25, 'page', 5, 4),
(26, 'page', 6, 4),
(27, 'page', 7, 4),
(28, 'file', 12, 1),
(29, 'file', 13, 1),
(30, 'file', 14, 1),
(31, 'page', 8, 1),
(32, 'page', 9, 1),
(33, 'page', 10, 1),
(34, 'page', 11, 4),
(35, 'page', 12, 4),
(36, 'quiz', 9, 4),
(37, 'page', 13, 6),
(38, 'page', 14, 7),
(39, 'file', 15, 1),
(40, 'page', 15, 1),
(41, 'page', 16, 8),
(42, 'quiz', 10, 8),
(43, 'page', 17, 9),
(44, 'quiz', 11, 9);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sys_administrators`
--

CREATE TABLE `tbl_sys_administrators` (
  `id` int(11) NOT NULL,
  `firstname` varchar(200) NOT NULL,
  `lastname` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_sys_administrators`
--

INSERT INTO `tbl_sys_administrators` (`id`, `firstname`, `lastname`) VALUES
(6, 'Borris', 'Lumichenko');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sys_enrollment`
--

CREATE TABLE `tbl_sys_enrollment` (
  `id` int(11) NOT NULL,
  `school_year` varchar(20) NOT NULL,
  `semester` varchar(20) NOT NULL,
  `date_started` date NOT NULL DEFAULT current_timestamp(),
  `date_ended` date DEFAULT NULL,
  `started_by` int(11) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_sys_enrollment`
--

INSERT INTO `tbl_sys_enrollment` (`id`, `school_year`, `semester`, `date_started`, `date_ended`, `started_by`, `status`) VALUES
(11, '6', '1st', '2023-11-07', NULL, 1, 'active');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sys_sy`
--

CREATE TABLE `tbl_sys_sy` (
  `id` int(11) NOT NULL,
  `school_year_start` varchar(50) NOT NULL,
  `school_year_end` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_sys_sy`
--

INSERT INTO `tbl_sys_sy` (`id`, `school_year_start`, `school_year_end`, `status`) VALUES
(6, '2023', '2024', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_teachers`
--

CREATE TABLE `tbl_teachers` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `middlename` varchar(50) NOT NULL,
  `birthdate` date NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile_no` varchar(50) NOT NULL,
  `add_st` varchar(50) NOT NULL,
  `add_city` varchar(50) NOT NULL,
  `add_state` varchar(50) NOT NULL,
  `zip_code` varchar(50) NOT NULL,
  `e_name` varchar(50) NOT NULL,
  `e_contact` varchar(50) NOT NULL,
  `e_relationship` varchar(50) NOT NULL,
  `photo_dir` text NOT NULL,
  `date_joined` date DEFAULT current_timestamp(),
  `is_archived` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_teachers`
--

INSERT INTO `tbl_teachers` (`id`, `firstname`, `lastname`, `middlename`, `birthdate`, `age`, `gender`, `email`, `mobile_no`, `add_st`, `add_city`, `add_state`, `zip_code`, `e_name`, `e_contact`, `e_relationship`, `photo_dir`, `date_joined`, `is_archived`) VALUES
(18, 'Lewis', 'Capaldi', 'M', '1987-09-05', 36, 'male', 'lcapaldi@gmail.com', '09171581698', '21 Alligator Brgy Rizal', 'Makati City', 'Metro Manila', '1987', 'Miriam A. Capaldi', '091567987654', 'Spouse', 'src/public/user_pics/u_8659tatag.png', '2023-09-05', 0),
(22, 'Archer Bibol', 'Antonio', 'C', '1977-09-12', 45, 'male', 'archer@gmail.com', '09171055486', '21 Alligator Brgy Rizal', 'Makati City', 'Metro Manila', '1125', 'Julie C. Antonio', '091567987654', 'Parent', 'src/public/user_pics/u_9560Untitled.png', '2023-09-12', 1),
(24, 'Anthony', 'Monastrial', '', '1987-09-14', 36, 'male', 'amos@gmail.com', '09587654831', '89 Ilang ilang St Pembo', 'Makati City', 'Good State', '9982', 'Paolo Contis', '09837469182', 'Cousin', '', '2023-09-14', 1),
(25, 'Miguel Sebastian', 'Gonzales', '', '1999-09-15', 24, 'male', 'miguelito@gmail.com', '0987654681', 'Sesame Street', 'Tv5 City', 'United Alabama', '9982', 'Miggy Gonzales', '09986720921', 'Parent', '', '2023-09-15', 0),
(26, 'Juan', 'Dela Cruz', 'Bautista', '1998-09-08', 25, 'male', 'juandelacruz@gmail.com', '09867892561', '32nd street', 'taguig ', 'calm state', '5430', 'John Dela Cruz', '09837469182', 'Sibling', '', '2023-09-15', 0),
(27, 'Lina', 'Laguna', 'Morphy', '1987-01-02', 36, 'female', 'lagunabrade@gmail.com', '09171077268', 'scorpion', 'taguig', 'metro manila', '1640', 'lina moonfang', '09171077258', 'Spouse', '', '2023-10-24', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_teacher_subjects`
--

CREATE TABLE `tbl_teacher_subjects` (
  `id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_teacher_subjects`
--

INSERT INTO `tbl_teacher_subjects` (`id`, `teacher_id`, `subject_id`) VALUES
(16, 18, 13),
(17, 18, 14),
(18, 18, 15),
(21, 22, 15),
(22, 25, 13),
(23, 26, 15),
(24, 27, 12);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_topic_files`
--

CREATE TABLE `tbl_topic_files` (
  `id` int(11) NOT NULL,
  `file_dir` text NOT NULL,
  `description` text NOT NULL,
  `is_archived` int(11) NOT NULL,
  `filename` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_topic_files`
--

INSERT INTO `tbl_topic_files` (`id`, `file_dir`, `description`, `is_archived`, `filename`) VALUES
(12, 'src/public/topic_files/u_8073jlpt3.pdf', 'Introduction to Computer Programming 1', 0, 'Handout 1'),
(13, 'src/public/topic_files/u_5346jlpt4.pdf', 'Introduction to Computer Programming 2', 0, 'Handout 2'),
(15, 'src/public/topic_files/f_7375sys.txt', 'This is no longer an introduction', 0, 'Handout 3');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_topic_pages`
--

CREATE TABLE `tbl_topic_pages` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `page_content` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_topic_pages`
--

INSERT INTO `tbl_topic_pages` (`id`, `name`, `description`, `page_content`) VALUES
(8, 'Object Oriented Programming', 'Object Oriented Programming (OOP) approach identifies classes of objects that are closely related to the methods with which they are associated.', '<p><strong>Key Concepts of OOP</strong></p><p>To understand and use object-oriented programming, it is necessary to know the following key concepts:</p><p><br></p><p><strong>1. Class</strong></p><p>A class is the fundamental unit of C++ that paves the way for object-oriented programming. It is a user-defined data type that can be accessed and used by creating an instance of that class. It has its own data members and member functions. A class is comparable to an object’s blueprint. Both member functions and data members are found in classes. The data members inside the class are manipulated using these member functions.</p><p><br></p><p><strong>2. Object</strong></p><p>At the point of creation of a class, the description is the first object to be defined. An instance of a class exists in an object. Notably, the system does not allocate any memory space when a class is specified, but it’s allocated when it is instantiated, i.e., when an object is formed. Real-world things have state and behavior in common, a pair of features. An object conceals its behavior through methods and keeps its information in attributes.</p><p><br></p><p><strong>3. Syntax</strong></p><p>The principles that specify how a language is structured are known as syntax. In programming languages (rather than natural languages like English), syntax is the set of rules that define and guide how words, punctuation, and symbols are organized in a programming language. Without syntax, it is almost difficult to comprehend the semantics or meaning of a language. A compiler or interpreter won’t be able to understand the code if the syntax of a language is not adhered to.</p><p><br></p><p><strong>4. Encapsulation</strong></p><p>Encapsulation is the process of grouping functions and data into a single entity. To access these data members, the member function’s scope must be set to “public,” while the data members’ scope must be set to “private.” According to this theory, an item contains all important information; only a small subset is made available to the outside world. Each object has a private class that contains its implementation and state.</p><p><br></p><p><strong>5. Polymorphism</strong></p><p>Multiple classes can use the same method name using polymorphism, which also involves redefining methods for derived classes. Compile-time polymorphism and run-time polymorphism are the two different types of polymorphism. In addition to having several forms, objects are made to have shared behaviors. To avoid writing duplicate code, the software will determine which usage or meaning is required for each time an object from a parent class is used.</p><p><br></p><p><strong>6. Inheritance</strong></p><p>In its broadest sense, inheritance refers to the process of gaining properties. One object in OOP inherits the properties of another. Developers can reuse common functionality while retaining a distinct hierarchy by assigning relationships and subclasses between items. This characteristic of OOP speeds up development and provides more accuracy by requiring a more in-depth investigation of the data. The parent-child relationship is symbolized via inheritance.</p><p><br></p><p><strong>7. Abstraction</strong></p><p>One of the OOP concepts in Java is abstraction, which is the act of representing key features without including supporting information. It is a method for developing a brand-new data type appropriate for a particular application. It avoids providing extraneous or pointless facts and only displays the precise portion the user has requested. It is crucial since it prevents you from performing the same task more than once.</p>'),
(9, 'Advantages of OOP', 'Despite the rise of various programming models.', '<p><strong>1. Enables code reusability</strong></p><p>The idea of inheritance is one of the critical concepts offered by object-oriented programming. A class’s attributes can be passed down through inheritance, eliminating the need for duplication of effort. Doing this prevents the problems associated with repeatedly writing the same code.</p><p>Thanks to introducing the idea of classes, the code section can be used as many times as necessary in the program. A child class that uses the inheritance method inherits the parent class’s fields and methods. One can readily alter the parent class’s available methods and values.</p><p><strong>2. Increases productivity in software development</strong></p><p>We can create programs from pre-written, interconnected modules rather than having to start from scratch, which would save time and increase productivity. Thanks to the OOP language, we can break the software into manageable, discrete problems. Because it allows for the division of labor in the creation of object-based programs, object-oriented programming is modular.</p><p>It is also extendable, as you may add new characteristics and actions to objects. One can utilize objects in several applications. Object-oriented programming increases software development productivity, compared to conventional procedure-based programming techniques, due to modularity, extensibility, and reusability.</p><p><strong>3. Makes troubleshooting simpler</strong></p><p>When object-oriented programming is used, troubleshooting is made simpler since the user knows where to look in the code to find the source of the problem. Since the error will indicate where the issue is, there is no need to inspect additional code areas. All objects in object-oriented programming (OOP) are self-constrained, which is one benefit of employing encapsulation.&nbsp;<a href=\"https://www.spiceworks.com/tech/devops/articles/devops-engineer/\" target=\"_blank\" style=\"color: rgb(0, 127, 162); background-color: transparent;\">DevOps engineers</a>&nbsp;and developers gain a lot of advantages from this multimodal behavior because they may now work on several projects at once with the benefit of avoiding code duplication.</p><p><strong>4. Reinforces security</strong></p><p>To maintain&nbsp;<a href=\"https://www.spiceworks.com/it-security/application-security/articles/what-is-application-security-definition-best-practices/\" target=\"_blank\" style=\"color: rgb(0, 127, 162); background-color: transparent;\">application security</a>&nbsp;and provide vital data for viewing, we are filtering out limited data through data hiding and abstraction mechanisms. The concept of data abstraction in OOPS allows only a small amount of data to be displayed to the user, which is one of OOP’s strong points.</p><p>When only the necessary info is accessible, the rest is not. As a result, it makes security maintenance possible. Another set of OOP’s advantages in Java’s idea of abstraction is used to conceal complexity from other users and display the element’s information per the requirements.</p><p><br></p><p><img src=\"src/public/topic_imgs/id_3.png\"></p>'),
(11, 'Introduction', 'The library for web and native user interfaces.', '<p><span style=\"color: rgb(64, 71, 86);\">React lets you build user interfaces out of individual pieces called components. Create your own React components like&nbsp;</span><code style=\"color: rgb(64, 71, 86); background-color: rgba(208, 211, 220, 0.4);\">Thumbnail</code><span style=\"color: rgb(64, 71, 86);\">,&nbsp;</span><code style=\"color: rgb(64, 71, 86); background-color: rgba(208, 211, 220, 0.4);\">LikeButton</code><span style=\"color: rgb(64, 71, 86);\">, and&nbsp;</span><code style=\"color: rgb(64, 71, 86); background-color: rgba(208, 211, 220, 0.4);\">Video</code><span style=\"color: rgb(64, 71, 86);\">. Then combine them into entire screens, pages, and apps.</span></p><p><img src=\"src/public/topic_imgs/id_4.png\"></p>'),
(12, 'Write components with code and markup', 'Learning React is learning programming.', '<p><span style=\"color: rgb(64, 71, 86);\">This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete.</span></p><p><span style=\"color: rgb(64, 71, 86);\"><span class=\"ql-cursor\">﻿</span></span><img src=\"src/public/topic_imgs/id_5.png\"></p>'),
(13, 'Basic Math | Addition', 'What is addition?', '<h6><strong>Addition</strong><strong style=\"color: rgb(136, 136, 136);\"><span class=\"ql-cursor\">﻿﻿</span></strong></h6><p>is the summation of two numbers by taking into account their magnitudes and signs. For example,&nbsp;3+1=4, while&nbsp;1+(−3)=−2. The result of addition is called the&nbsp;<strong>sum</strong>. Addition can be visualized on a number line by drawing arrows whose lengths match the magnitudes of the numbers being added, with positive numbers pointing to the right and negative numbers pointing to the left. The tip of the second arrow lands at the sum.</p><p><br></p><p>Basic math is nothing but the simple or basic concept related with mathematics. Generally, counting, addition, subtraction, multiplication and division are called the basic math operation. The other mathematical concept are built on top of the above 4 operations.</p>'),
(14, '20 types of figures of speech', 'Discover the 20 types of figures of speech', '<h6><strong>Alliteration</strong></h6><div><a href=\"https://www.grammarly.com/blog/alliteration/\" target=\"_blank\" style=\"color: inherit; background-color: transparent;\">Alliteration</a><span style=\"color: rgb(59, 62, 77);\">&nbsp;is the repeating of consonant sounds right next to each other, which creates a memorable or melodic effect.</span></div><div><strong style=\"color: rgb(59, 62, 77);\">Example</strong><span style=\"color: rgb(59, 62, 77);\">: She sells seashells by the seashore.</span></div><h6><br></h6><h6><strong>Antithesis</strong></h6><div><a href=\"https://www.grammarly.com/blog/antithesis/\" target=\"_blank\" style=\"color: inherit; background-color: transparent;\">Antithesis</a>&nbsp;is a literary technique that places opposite things or ideas next to one another in order to draw out their contrast.</div><div>Example: “It was the best of times, it was the worst of times . . .” —Charles</div><div><br></div><div><br></div>'),
(15, 'test', 'test', '<div>--------------- <u>PROPERTIES PAGE</u> ---------------</div><div>&nbsp;</div><div><strong>Page Title</strong> - Copy Published Page Title --&gt; Apply Translation Corrections --&gt; then Apply 3rd Appearance Rule</div><div>&nbsp;</div><div><strong>Description</strong> - Copy Published Page Description --&gt; Apply Translation Corrections --&gt; then Apply 1st Appearance Rule --&gt; Global Trademark</div><div>&nbsp;</div><div>&nbsp;</div><div>--------------- <u>EDIT PAGE</u> ---------------</div><div><strong>1st Appearance:</strong></div><ul><li>Description - Copy Published Page Description --&gt; then Apply 1st Appearance Rule --&gt; Apply Translation Corrections --&gt; Global Trademark</li><li>Text</li><li>Paragraphs</li><li>List</li><li>Link inside Paragraph</li></ul><div>&nbsp;</div><div><strong>2nd Appearance:</strong></div><ul><li>Description - Copy Published Page Description --&gt; then Apply 1st Appearance Rule --&gt; Apply Translation Corrections --&gt; Global Trademark</li><li>Text</li><li>Paragraphs</li><li>List</li><li>Link inside Paragraph</li></ul><div>&nbsp;</div><div><strong>3rd Appearance:</strong></div><ul><li>Title - Copy Published Page Title --&gt; then Apply 3rd Appearance Rule --&gt; Apply Translation Corrections</li><li>Header</li><li>Accordion Header</li><li>Button Links</li><li>Text Link</li></ul><div>&nbsp;</div><div><strong>IGNORE</strong>:&nbsp;</div><ul><li>Texts inside [・・・] and「・・・」</li></ul><div><br></div>'),
(16, ' Branches of Algebra', 'What are the branches of algebra?', '<div>The complexity of algebra is simplified by the use of numerous algebraic expressions. Based on the use and the complexity of the expressions, algebra can be classified into various branches that are listed below:</div><div><br></div><ul><li>Pre-algebra</li><li>Elementary Algebra</li><li>Abstract Algebra</li><li>Universal Algebra</li></ul><div><br></div>'),
(17, 'What Are Logical Reasoning Topics?', 'This is a sample Topic', '<p><span style=\"color: rgb(45, 45, 45);\">Logical reasoning topics comprise questions that test a candidate\'s ability to understand and logically find a solution to a problem. By asking logical reasoning questions, employers can understand a candidate\'s cognitive ability and analytical skills. Logical reasoning questions for various entrance test and interviews gives employers a great way to gauge how you use resources, ask questions and work under pressure. When appearing for an interview or online examination, you may come across some of the following reasoning topics:</span></p>');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_topic_page_videos`
--

CREATE TABLE `tbl_topic_page_videos` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `vid_dir` text NOT NULL,
  `subject_topic_page_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_topic_page_videos`
--

INSERT INTO `tbl_topic_page_videos` (`id`, `title`, `vid_dir`, `subject_topic_page_id`) VALUES
(3, 'Demo | How to get data from JSX Object', 'src/public/topic_vids/f_5527mov_bbb.mp4', 7),
(5, ' Demo : Displaying data using JSX', 'src/public/topic_vids/f_3159mov_bbb.mp4', 7),
(6, 'Demo | Application of OOP', 'src/public/topic_vids/f_8357mov_bbb.mp4', 9),
(7, 'Sample of Addition', 'src/public/topic_vids/f_4187mov_bbb.mp4', 13);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `access_level` int(11) NOT NULL DEFAULT 1,
  `is_archive` int(11) NOT NULL DEFAULT 0,
  `profile_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `username`, `password`, `access_level`, `is_archive`, `profile_id`) VALUES
(1, 'admin', '1', 3, 0, '6'),
(8, 'teacher', '1', 4, 0, '18'),
(11, 'student', '1', 2, 0, '20230001'),
(12, 'student2', '1', 2, 0, '20230002'),
(14, 'student3', '1', 2, 0, '20230015');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_quiz`
--
ALTER TABLE `tbl_quiz`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_quiz_items`
--
ALTER TABLE `tbl_quiz_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_quiz_options`
--
ALTER TABLE `tbl_quiz_options`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_sections`
--
ALTER TABLE `tbl_sections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_section_schedule`
--
ALTER TABLE `tbl_section_schedule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_section_students`
--
ALTER TABLE `tbl_section_students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_staffs`
--
ALTER TABLE `tbl_staffs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_strands`
--
ALTER TABLE `tbl_strands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_student_applications`
--
ALTER TABLE `tbl_student_applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_student_attachments`
--
ALTER TABLE `tbl_student_attachments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_student_cards`
--
ALTER TABLE `tbl_student_cards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_student_enrollments`
--
ALTER TABLE `tbl_student_enrollments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_student_grades`
--
ALTER TABLE `tbl_student_grades`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_student_information`
--
ALTER TABLE `tbl_student_information`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_student_quiz`
--
ALTER TABLE `tbl_student_quiz`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_student_quiz_answer_sheet`
--
ALTER TABLE `tbl_student_quiz_answer_sheet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_subjects`
--
ALTER TABLE `tbl_subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_subject_topics`
--
ALTER TABLE `tbl_subject_topics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_subject_topic_items`
--
ALTER TABLE `tbl_subject_topic_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_sys_administrators`
--
ALTER TABLE `tbl_sys_administrators`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_sys_enrollment`
--
ALTER TABLE `tbl_sys_enrollment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_sys_sy`
--
ALTER TABLE `tbl_sys_sy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_teachers`
--
ALTER TABLE `tbl_teachers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_teacher_subjects`
--
ALTER TABLE `tbl_teacher_subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_topic_files`
--
ALTER TABLE `tbl_topic_files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_topic_pages`
--
ALTER TABLE `tbl_topic_pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_topic_page_videos`
--
ALTER TABLE `tbl_topic_page_videos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `profile_id` (`profile_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_quiz`
--
ALTER TABLE `tbl_quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_quiz_items`
--
ALTER TABLE `tbl_quiz_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `tbl_quiz_options`
--
ALTER TABLE `tbl_quiz_options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `tbl_sections`
--
ALTER TABLE `tbl_sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `tbl_section_schedule`
--
ALTER TABLE `tbl_section_schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `tbl_section_students`
--
ALTER TABLE `tbl_section_students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_staffs`
--
ALTER TABLE `tbl_staffs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_strands`
--
ALTER TABLE `tbl_strands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_student_applications`
--
ALTER TABLE `tbl_student_applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `tbl_student_attachments`
--
ALTER TABLE `tbl_student_attachments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `tbl_student_cards`
--
ALTER TABLE `tbl_student_cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_student_enrollments`
--
ALTER TABLE `tbl_student_enrollments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_student_grades`
--
ALTER TABLE `tbl_student_grades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `tbl_student_information`
--
ALTER TABLE `tbl_student_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_student_quiz`
--
ALTER TABLE `tbl_student_quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=382;

--
-- AUTO_INCREMENT for table `tbl_student_quiz_answer_sheet`
--
ALTER TABLE `tbl_student_quiz_answer_sheet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `tbl_subjects`
--
ALTER TABLE `tbl_subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `tbl_subject_topics`
--
ALTER TABLE `tbl_subject_topics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_subject_topic_items`
--
ALTER TABLE `tbl_subject_topic_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `tbl_sys_administrators`
--
ALTER TABLE `tbl_sys_administrators`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_sys_enrollment`
--
ALTER TABLE `tbl_sys_enrollment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_sys_sy`
--
ALTER TABLE `tbl_sys_sy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_teachers`
--
ALTER TABLE `tbl_teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `tbl_teacher_subjects`
--
ALTER TABLE `tbl_teacher_subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `tbl_topic_files`
--
ALTER TABLE `tbl_topic_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_topic_pages`
--
ALTER TABLE `tbl_topic_pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tbl_topic_page_videos`
--
ALTER TABLE `tbl_topic_page_videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
