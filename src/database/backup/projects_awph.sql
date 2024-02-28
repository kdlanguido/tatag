-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2024 at 05:48 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projects_awph`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_clubpage_configuration`
--

CREATE TABLE `tbl_clubpage_configuration` (
  `id` int(11) NOT NULL,
  `club_id` int(11) NOT NULL,
  `background` varchar(50) NOT NULL,
  `basecolor` varchar(50) NOT NULL,
  `fontcolor` varchar(50) NOT NULL,
  `hovercolor` varchar(50) NOT NULL,
  `est_fontfam` varchar(50) NOT NULL,
  `nav_fontfam` varchar(50) NOT NULL,
  `tagline_fontfam` varchar(50) NOT NULL,
  `default_fontfam` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_clubpage_configuration`
--

INSERT INTO `tbl_clubpage_configuration` (`id`, `club_id`, `background`, `basecolor`, `fontcolor`, `hovercolor`, `est_fontfam`, `nav_fontfam`, `tagline_fontfam`, `default_fontfam`) VALUES
(1, 6, '#141516', '#fff', '#E9C001', '#fff', 'baybayin', 'boston', 'mich', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_clubs`
--

CREATE TABLE `tbl_clubs` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `alias` varchar(200) NOT NULL,
  `region` varchar(100) NOT NULL,
  `img` text NOT NULL,
  `tagline` text NOT NULL,
  `establish` text NOT NULL,
  `founder` varchar(200) NOT NULL,
  `members` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_clubs`
--

INSERT INTO `tbl_clubs` (`id`, `name`, `alias`, `region`, `img`, `tagline`, `establish`, `founder`, `members`) VALUES
(17, 'Titan Arms Taguig', 'TATAG', 'NCR – National Capital Region', 'src/public/club_logos/image.png', 'Let our titan arms do the talking', '2023', 'King Dranreb Languido', 18),
(19, 'Cavite Arm Fighters', 'CAF', 'Region IV‑A – CALABARZON', 'src/public/club_logos/IMG_9368.jpeg', ' ', '2020', 'Jun Soledad', 30),
(20, 'Binangonan Arm Squad ', 'BAS', 'Region IV‑A – CALABARZON', 'src/public/club_logos/inbound757710466987850992.jpg', 'United as one \"Brothers in Arm', '2022', 'Reynald C. Torres', 30),
(21, 'Titan Arms Catanduanes', 'TACAT', 'Region V – Bicol Region', 'src/public/club_logos/IMG_9347.png', ' ', '2023', 'Cikko Lareza', 15),
(25, 'Mindanao Strong Arm ', 'CDO/BUKIDNON PULLERS', 'Region X – Northern Mindanao', 'src/public/club_logos/inbound2033305194546048766.jpg', '', '2018', 'John Michael Abapo ', 65),
(27, 'Coron Bunong Braso', 'CORON PULLERS', 'MIMAROPA Region', 'src/public/club_logos/inbound7665356709790662609.jpg', 'Matira Matibay', '2021', 'John Lyndel Palomo ', 15),
(28, 'Carmona Pullers ', 'None ', 'Region IV‑A – CALABARZON', 'src/public/club_logos/inbound6058370965319264166.jpg', 'God first then family and finally Armwrestling ', '2021', 'Jhon Albert Umali ', 20),
(29, 'Armsquad x AfL', 'Armsquad Lucena', 'Region IV‑A – CALABARZON', 'src/public/club_logos/inbound6500610941632769431.jpg', 'Train hard pull hard', '2021', 'Toffee', 30),
(30, 'Ukbo Iloilo', 'Ukbros, Armwrestling Iloilo', 'Region VI – Western Visayas', 'src/public/club_logos/inbound1702776285475105270.jpg', 'Ukbo \'ta', '2020', 'Erlando Fredrik Octaviano', 25),
(33, 'Cavite Arm Warriors', 'Cavite City ', 'NCR – National Capital Region', 'src/public/club_logos/inbound8643730147357237683.jpg', 'Pull Fast . Pull Hard .  No Mercy', '2019', 'Markrenzy crisostomo ( kidlat) ', 30),
(34, 'Laguna Pullers', 'Alaminos Arm Warriors', 'Region IV‑A – CALABARZON', 'src/public/club_logos/inbound2881766150553656971.png', 'Yeah Bigboy!!!', '2019', 'Steve', 15),
(35, 'Ironquest Toprollers', 'IQ', 'NCR – National Capital Region', 'src/public/club_logos/img_1_1690471791148.jpg', 'Warm body, cold mind', '2023', 'Carlos Lanzona', 3),
(36, 'Sikan Kapampangan', 'Sikan', 'Region III – Central Luzon', 'src/public/club_logos/inbound716063911733708240.png', '', '2022', 'Duane Gonzalez', 6),
(37, 'Makati Pullers', 'The Wrecking Machin3', 'NCR – National Capital Region', 'src/public/club_logos/inbound7727314056435934363.jpg', 'Makati Puller ', '2018', 'James Barry R.Ausan', 35),
(38, 'Notorious Isabela Pullers', 'THE KALGAG MASTERS', 'Region II – Cagayan Valley', 'src/public/club_logos/Notorious Isabela Pullers Logo.png', 'No pain, No gain!', '2023', 'Neo Arcinas', 12),
(39, 'Ukbo Tv', 'Ukbotv', 'Region IV‑A – CALABARZON', 'src/public/club_logos/inbound4711957494693008045.png', 'UKBO TV', '2021', 'Injap Peral', 20),
(40, 'Olongapo pullers', 'None', 'Region III – Central Luzon', 'src/public/club_logos/inbound5288895996541772635.jpg', 'None', '2019', 'Justine daquilanea', 14),
(41, 'North Caloocan Pullers', 'North pullers', 'NCR – National Capital Region', 'src/public/club_logos/inbound1052675651909380794.jpg', '', '2018', 'Arnel salundaguit', 15),
(42, 'Marikina Merciless Pullers', 'MAWMAW ', 'NCR – National Capital Region', 'src/public/club_logos/6D3DB2CB-C45B-47E4-8743-ED4487145634.jpeg', 'Pin Mo na!!!!', '2023', 'Vinz Roi Chiong', 11),
(43, 'Red Arm Commandos', 'Commandos', 'Region VI – Western Visayas', 'src/public/club_logos/redarmcommandos.png', 'Vur Ha! Strike Fast! Strike Strong!', '2020', 'Ralph Diorren Galvan', 5),
(44, 'Tanauan Pullers', 'T.P TIGERS ', 'Region IV‑A – CALABARZON', 'src/public/club_logos/Picsart_22-12-09_13-20-48-666 (1).png', 'Matalo man ng ilang beses tuloy lang sa pangarap na lumakas.', '2022', 'Christian', 5),
(45, 'NewBloodz', '', 'Region IV‑A – CALABARZON', 'src/public/club_logos/inbound8273501868211657982.jpg', '', '2018', 'Jadd Brad Villarino', 25),
(46, 'Mariveles Arm-Wrestlers ', '', 'Region III – Central Luzon', 'src/public/club_logos/inbound1698000595181102282.jpg', 'DEFY YOUR LIMITS', '2023', 'James Ryan G. Briones ', 10),
(48, 'Beast Arm Pasay Pullers', 'Pasay Pullers', 'NCR – National Capital Region', 'src/public/club_logos/inbound7717259700349995348.jpg', 'No Pain, No Gain', '2017', 'Jham Dimaro', 30),
(49, 'Igorot Arm Machines', 'Baguio Armwrestling Team, Cordillera Pullers', 'CAR – Cordillera Administrative Region', 'src/public/club_logos/sb.png', '\"it\'s in our blood to fight as one\" igorots, the warriors of the north', '2019', 'Abraham Kerchaten', 90),
(50, 'Zamboanga Puller Kayero Braso', 'Kayero', 'Region IX – Zamboanga Peninsula', 'src/public/club_logos/inbound832344855228916114.jpg', 'We are fighters', '2021', 'Rocky Jamang Saridol', 60),
(51, 'Camanava Pullers', 'Team Camanava', 'NCR – National Capital Region', 'src/public/club_logos/inbound8823002802160930057.jpg', 'Never Back Down', '2023', 'JOHNDEL CRUZ', 30),
(53, 'Manila Pullers', 'Captain', 'NCR – National Capital Region', 'src/public/club_logos/inbound3642946352867785241.webp', 'The best training of armwrestling is to be armwrestler', '2018', 'Calvin Santos', 40),
(64, 'Bukidnon Arm Fighters', 'Totong', 'Region X – Northern Mindanao', 'src/public/club_logos/inbound2315162273527608871.png', '', '2023', 'Jerwin', 15),
(65, 'Bogsuon', '', 'Region XI – Davao Region', 'src/public/club_logos/inbound3800246503103366351.jpg', '', '2023', 'Pocholo Cedric V. Seniel', 20),
(72, 'Pinoy Pullers', 'Pinoy Pullers', 'NCR – National Capital Region', 'src/public/club_logos/IMG_9589.jpeg', ' ', '2020', 'Mark Ben', 0),
(73, 'Tyrant Pullers', 'Strong Arms', 'NCR – National Capital Region', 'src/public/club_logos/20230805_215744_0001.png', 'The more you sweat, The less you bleed', '2023', 'Johnmer Morales', 10),
(74, 'Nueva Ecija Brothers in ARM', 'Nueva Ecija Bulls', 'Region III – Central Luzon', 'src/public/club_logos/New Project (8).png', '', '', 'Boz King De Leon', 20),
(75, 'Las Pinas Pullers', 'Las Pinas Pullers', 'NCR – National Capital Region', 'src/public/club_logos/inbound8165348907764767268.png', '', '', 'Darell Frilles', 20),
(86, 'Titan Arms Marinduque', 'TAMAR', 'MIMAROPA Region', 'src/public/club_logos/tamar.png', '', '2023', 'Francis Acuesta', 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_club_achievements`
--

CREATE TABLE `tbl_club_achievements` (
  `id` int(11) NOT NULL,
  `achievement` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `club_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_club_members`
--

CREATE TABLE `tbl_club_members` (
  `id` int(11) NOT NULL,
  `club_id` int(11) NOT NULL,
  `position` varchar(50) DEFAULT 'member',
  `is_approved` int(11) NOT NULL DEFAULT 0,
  `approved_date` date DEFAULT NULL,
  `approved_by` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_club_members`
--

INSERT INTO `tbl_club_members` (`id`, `club_id`, `position`, `is_approved`, `approved_date`, `approved_by`, `user_id`) VALUES
(18, 17, 'founder', 1, '2023-08-04', 16, 16),
(22, 17, 'member', 1, '2023-08-04', 16, 20),
(23, 17, 'member', 1, '2023-08-04', 16, 21),
(27, 17, 'member', 1, '2023-08-04', 16, 25),
(28, 17, 'member', 1, '2023-08-04', 16, 26),
(29, 17, 'member', 1, '2023-08-04', 16, 27),
(30, 21, 'founder', 1, '2023-08-04', 0, 28),
(31, 17, 'member', 1, '2023-08-04', 16, 29),
(32, 53, 'member', 1, '2023-08-05', 48, 30),
(33, 17, 'member', 1, '2023-08-04', 16, 31),
(34, 17, 'member', 1, '2023-08-04', 16, 32),
(35, 17, 'member', 1, '2023-08-04', 16, 33),
(36, 17, 'member', 1, '2023-08-04', 16, 34),
(37, 17, 'member', 1, '2023-08-05', 16, 35),
(38, 17, 'member', 1, '2023-08-05', 16, 36),
(39, 17, 'member', 1, '2023-08-05', 16, 37),
(41, 17, 'member', 1, '2023-08-05', 16, 39),
(42, 17, 'member', 1, '2023-08-05', 16, 40),
(46, 17, 'member', 1, '2023-08-05', 16, 44),
(47, 17, 'member', 1, '2023-08-05', 16, 45),
(48, 17, 'member', 1, '2023-08-05', 16, 46),
(49, 72, 'member', 0, NULL, 0, 47),
(50, 53, 'founder', 1, '2023-08-05', 0, 48),
(51, 53, 'member', 1, '2023-08-05', 48, 49),
(52, 53, 'member', 1, '2023-08-05', 48, 50),
(53, 42, 'member', 1, '2023-08-07', 52, 51),
(54, 42, 'founder', 1, '2023-08-07', 0, 52),
(55, 53, 'member', 1, '2023-08-05', 48, 53),
(56, 53, 'member', 1, '2023-08-05', 48, 54),
(57, 42, 'member', 1, '2023-08-07', 52, 55),
(58, 53, 'member', 1, '2023-08-05', 48, 56),
(59, 35, 'member', 0, NULL, 0, 57),
(60, 43, 'founder', 1, '2023-08-07', 0, 58),
(61, 42, 'member', 1, '2023-08-07', 52, 59),
(62, 42, 'member', 1, '2023-08-07', 52, 60),
(63, 42, 'member', 1, '2023-08-07', 52, 61),
(64, 42, 'member', 1, '2023-08-07', 52, 62),
(65, 72, 'member', 0, NULL, 0, 63),
(69, 29, 'founder', 1, '2023-08-05', 0, 67),
(70, 53, 'member', 1, '2023-08-05', 48, 68),
(71, 29, 'member', 1, '2023-08-05', 67, 69),
(72, 42, 'member', 1, '2023-08-07', 52, 70),
(73, 17, 'member', 0, NULL, 0, 71),
(74, 36, 'member', 1, '2023-08-10', 142, 72),
(75, 29, 'member', 1, '2023-08-05', 67, 73),
(76, 19, 'member', 1, '2023-08-10', 197, 74),
(77, 29, 'member', 1, '2023-08-06', 67, 75),
(78, 29, 'member', 1, '2023-08-06', 67, 76),
(79, 29, 'member', 1, '2023-08-06', 67, 77),
(80, 29, 'member', 1, '2023-08-06', 67, 78),
(81, 34, 'member', 0, NULL, 0, 79),
(82, 19, 'member', 1, '2023-08-10', 197, 80),
(83, 42, 'member', 1, '2023-08-07', 52, 81),
(84, 34, 'member', 0, NULL, 0, 82),
(85, 42, 'member', 1, '2023-08-07', 52, 83),
(86, 45, 'member', 0, NULL, 0, 84),
(87, 72, 'member', 0, NULL, 0, 85),
(89, 73, 'member', 1, '2023-08-09', 97, 87),
(90, 34, 'member', 0, NULL, 0, 88),
(91, 29, 'member', 1, '2023-08-06', 67, 89),
(92, 29, 'member', 1, '2023-08-06', 67, 90),
(93, 20, 'member', 1, '2023-08-07', 123, 91),
(94, 20, 'member', 1, '2023-08-07', 123, 92),
(95, 74, 'member', 0, NULL, 0, 93),
(96, 20, 'member', 1, '2023-08-07', 123, 94),
(97, 53, 'member', 1, '2023-08-06', 48, 95),
(98, 20, 'member', 1, '2023-08-07', 123, 96),
(99, 73, 'founder', 1, '2023-08-09', 0, 97),
(100, 29, 'member', 1, '2023-08-06', 67, 98),
(101, 73, 'member', 1, '2023-08-09', 97, 99),
(102, 28, 'founder', 1, '2023-08-07', 0, 100),
(104, 28, 'member', 1, '2023-08-10', 100, 102),
(114, 0, 'member', 0, NULL, 0, 112),
(115, 29, 'member', 1, '2023-08-06', 67, 113),
(116, 20, 'member', 1, '2023-08-07', 123, 114),
(117, 29, 'member', 1, '2023-08-06', 67, 115),
(118, 29, 'member', 0, NULL, 0, 116),
(119, 25, 'founder', 1, '2023-08-07', 0, 117),
(121, 29, 'member', 0, NULL, 0, 119),
(122, 19, 'founder', 1, '2023-08-07', 0, 197),
(123, 20, 'member', 0, NULL, 0, 121),
(124, 17, 'member', 0, NULL, 0, 122),
(125, 20, 'founder', 1, '2023-08-07', 0, 123),
(126, 42, 'member', 1, '2023-08-07', 52, 124),
(127, 20, 'member', 1, '2023-08-07', 123, 125),
(128, 20, 'member', 1, '2023-08-07', 123, 126),
(129, 38, 'founder', 1, '2023-08-07', 0, 127),
(131, 38, 'member', 1, '2023-08-07', 127, 129),
(133, 38, 'member', 1, '2023-08-07', 127, 131),
(134, 38, 'member', 1, '2023-08-07', 127, 132),
(135, 19, 'member', 1, '2023-08-10', 197, 133),
(136, 74, 'member', 0, NULL, 0, 134),
(137, 75, 'founder', 1, '2023-08-07', 0, 135),
(138, 25, 'member', 1, '2023-08-08', 117, 136),
(139, 75, 'member', 1, '2023-08-07', 135, 137),
(140, 51, 'member', 0, NULL, 0, 138),
(141, 51, 'founder', 1, '2023-08-08', 0, 139),
(142, 20, 'member', 1, '2023-08-07', 123, 140),
(143, 75, 'member', 1, '2023-08-07', 135, 141),
(144, 36, 'founder', 1, '2023-08-07', 0, 142),
(145, 51, 'member', 1, '2023-08-07', 139, 143),
(146, 51, 'member', 1, '2023-08-07', 139, 144),
(147, 51, 'member', 1, '2023-08-07', 139, 145),
(148, 51, 'member', 1, '2023-08-08', 139, 146),
(149, 19, 'member', 1, '2023-08-10', 197, 147),
(150, 51, 'member', 1, '2023-08-08', 139, 148),
(151, 17, 'member', 0, NULL, 0, 149),
(152, 17, 'member', 0, NULL, 0, 150),
(153, 17, 'member', 0, NULL, 0, 151),
(154, 19, 'member', 1, '2023-08-10', 197, 152),
(155, 51, 'member', 1, '2023-08-08', 139, 153),
(156, 41, 'member', 0, NULL, 0, 154),
(157, 51, 'member', 1, '2023-08-08', 139, 155),
(158, 20, 'member', 1, '2023-12-22', 123, 156),
(159, 51, 'member', 1, '2023-08-08', 139, 157),
(160, 20, 'member', 1, '2023-12-22', 123, 158),
(161, 20, 'member', 1, '2023-12-22', 123, 159),
(162, 45, 'member', 0, NULL, 0, 160),
(163, 50, 'founder', 1, '2023-08-09', 0, 161),
(164, 38, 'member', 1, '2023-08-08', 127, 162),
(165, 53, 'member', 1, '2023-08-08', 48, 163),
(166, 20, 'member', 1, '2023-12-22', 123, 164),
(167, 20, 'member', 1, '2023-12-22', 123, 165),
(168, 51, 'member', 1, '2023-08-08', 139, 166),
(169, 28, 'member', 1, '2023-08-10', 100, 167),
(170, 51, 'member', 1, '2023-08-08', 139, 168),
(171, 53, 'member', 1, '2023-08-08', 48, 169),
(172, 36, 'member', 1, '2023-08-10', 142, 170),
(173, 76, 'member', 0, NULL, 0, 171),
(174, 51, 'member', 1, '2023-08-08', 139, 172),
(175, 53, 'member', 1, '2023-08-08', 48, 173),
(176, 53, 'member', 1, '2023-08-08', 48, 174),
(177, 51, 'member', 1, '2023-08-08', 139, 175),
(178, 53, 'member', 1, '2023-08-08', 48, 176),
(179, 53, 'member', 1, '2023-08-08', 48, 177),
(180, 46, 'member', 0, NULL, 0, 178),
(181, 82, 'member', 0, NULL, 0, 179),
(182, 50, 'member', 1, '2023-08-09', 161, 180),
(183, 20, 'member', 1, '2023-12-22', 123, 181),
(184, 76, 'member', 0, NULL, 0, 182),
(185, 51, 'member', 1, '2023-08-08', 139, 183),
(186, 17, 'member', 0, NULL, 0, 184),
(187, 17, 'member', 0, NULL, 0, 185),
(188, 51, 'member', 1, '2023-08-08', 139, 186),
(189, 51, 'member', 1, '2023-08-08', 139, 187),
(190, 51, 'member', 1, '2023-08-08', 139, 188),
(191, 51, 'member', 1, '2023-08-09', 139, 189),
(192, 72, 'member', 0, NULL, 0, 190),
(193, 73, 'member', 0, NULL, 0, 191),
(194, 64, 'member', 0, NULL, 0, 192),
(195, 72, 'member', 0, NULL, 0, 193),
(196, 25, 'member', 0, NULL, 0, 194),
(197, 33, 'member', 0, NULL, 0, 195),
(198, 33, 'member', 0, NULL, 0, 196),
(200, 25, 'member', 0, NULL, 0, 198),
(201, 64, 'member', 0, NULL, 0, 199),
(202, 25, 'member', 0, NULL, 0, 200),
(203, 17, 'member', 0, NULL, 0, 201),
(204, 17, 'member', 0, NULL, 0, 202),
(205, 25, 'member', 0, NULL, 0, 203),
(206, 25, 'member', 0, NULL, 0, 204),
(207, 25, 'member', 0, NULL, 0, 205),
(208, 51, 'member', 1, '2023-08-09', 139, 206),
(209, 50, 'member', 1, '2023-08-09', 161, 207),
(210, 17, 'member', 0, NULL, 0, 208),
(211, 73, 'member', 0, NULL, 0, 209),
(212, 51, 'member', 1, '2023-08-09', 139, 210),
(213, 72, 'member', 0, NULL, 0, 211),
(214, 50, 'member', 1, '2023-08-09', 161, 212),
(215, 51, 'member', 1, '2023-08-09', 139, 213),
(216, 50, 'member', 1, '2023-08-09', 161, 214),
(217, 50, 'member', 1, '2023-08-09', 161, 215),
(218, 25, 'member', 0, NULL, 0, 216),
(219, 25, 'member', 0, NULL, 0, 217),
(220, 85, 'member', 0, NULL, 0, 218),
(221, 72, 'member', 0, NULL, 0, 219),
(222, 72, 'member', 0, NULL, 0, 220),
(223, 50, 'member', 1, '2023-08-09', 161, 221),
(224, 50, 'member', 1, '2023-08-09', 161, 222),
(225, 64, 'member', 0, NULL, 0, 223),
(226, 50, 'member', 1, '2023-08-09', 161, 224),
(227, 73, 'member', 1, '2023-08-12', 97, 225),
(228, 72, 'member', 0, NULL, 0, 226),
(229, 17, 'member', 0, NULL, 0, 227),
(230, 44, 'member', 0, NULL, 0, 228),
(231, 86, 'founder', 1, '2023-08-10', 0, 229),
(232, 37, 'member', 0, NULL, 0, 230),
(233, 86, 'member', 1, '2023-09-22', 229, 231),
(234, 73, 'member', 1, '2023-08-12', 97, 232),
(235, 51, 'member', 1, '2023-08-11', 139, 233),
(236, 75, 'member', 1, '2023-08-11', 135, 234),
(237, 75, 'member', 1, '2023-08-11', 135, 235),
(238, 75, 'member', 1, '2023-08-11', 135, 236),
(239, 75, 'member', 1, '2023-08-11', 135, 237),
(240, 75, 'member', 1, '2023-08-11', 135, 238),
(241, 87, 'member', 0, NULL, 0, 239),
(242, 17, 'member', 0, NULL, 0, 240),
(243, 17, 'member', 0, NULL, 0, 241),
(244, 17, 'member', 0, NULL, 0, 242),
(245, 87, 'member', 0, NULL, 0, 243),
(246, 87, 'member', 0, NULL, 0, 244),
(247, 36, 'member', 1, '2023-08-12', 142, 245),
(248, 38, 'member', 0, NULL, 0, 246),
(249, 19, 'member', 1, '2023-08-16', 197, 247),
(250, 19, 'member', 1, '2023-08-16', 197, 248),
(251, 41, 'member', 0, NULL, 0, 249),
(252, 28, 'member', 1, '2023-08-14', 100, 250),
(253, 29, 'member', 0, NULL, 0, 251),
(254, 29, 'member', 0, NULL, 0, 252),
(255, 29, 'member', 0, NULL, 0, 253),
(256, 50, 'member', 1, '2023-08-15', 161, 254),
(257, 73, 'member', 1, '2023-08-15', 97, 255),
(258, 17, 'member', 0, NULL, 0, 256),
(259, 73, 'member', 0, NULL, 0, 257),
(260, 17, 'member', 0, NULL, 0, 258),
(261, 50, 'member', 1, '2023-08-18', 161, 259),
(262, 29, 'member', 0, NULL, 0, 260),
(263, 38, 'member', 0, NULL, 0, 261),
(264, 17, 'member', 1, '2023-10-15', 16, 262),
(265, 20, 'member', 1, '2023-12-22', 123, 263),
(266, 17, 'member', 1, '2023-10-05', 16, 264),
(267, 17, 'member', 1, '2023-10-15', 16, 265),
(268, 17, 'member', 1, '2023-10-15', 16, 266),
(269, 17, 'member', 1, '2023-10-22', 16, 267),
(270, 42, 'member', 1, '2023-12-22', 52, 268),
(271, 42, 'member', 1, '2023-12-22', 52, 269),
(272, 42, 'member', 1, '2023-12-22', 52, 270),
(273, 42, 'member', 1, '2023-12-22', 52, 271),
(274, 42, 'member', 1, '2023-12-22', 52, 272),
(275, 42, 'member', 1, '2023-12-22', 52, 273),
(276, 17, 'member', 0, NULL, 0, 274),
(277, 42, 'member', 0, NULL, 0, 275),
(278, 42, 'member', 0, NULL, 0, 276),
(279, 42, 'member', 0, NULL, 0, 277),
(280, 42, 'member', 0, NULL, 0, 278),
(281, 42, 'member', 0, NULL, 0, 279),
(282, 42, 'member', 0, NULL, 0, 280);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_profile`
--

CREATE TABLE `tbl_profile` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `weight` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `member_type` varchar(50) NOT NULL,
  `img` text DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_profile`
--

INSERT INTO `tbl_profile` (`id`, `name`, `nickname`, `weight`, `category`, `member_type`, `img`, `user_id`) VALUES
(14, 'King Dranreb Languido', 'Dranreb', '70', 'LIGHTWEIGHT', 'gold', 'src/public/user_pics/u_16New Project (1).png', 16),
(18, 'Xhan Cadiz', 'Taguro', '81', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_20IMG_20230731_202957_383.jpg', 20),
(19, 'Ehnzo', 'Ehnz', '62', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_21FB_IMG_8986821290840889331.jpg', 21),
(23, 'JASPER JAY P. EDOLOG', 'GASPAR OR JJ', '66', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_25received_233503585776755.jpeg', 25),
(24, 'Chandler john dela', 'chand', '54', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_26', 26),
(25, 'Vien Francis Cesista', 'Vien', '75', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_27IMG_20230804_115013.jpg', 27),
(26, 'Rikko Rei Lareza', 'Cikko', '69', 'LIGHTWEIGHT', 'bronze', NULL, 28),
(27, 'Llameskirby', 'Miles', '50', 'FEATHERWEIGHT', 'bronze', NULL, 29),
(28, 'Stephen Fajardo', 'La Maquina', '90', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_30FB_IMG_1691125354778.jpg', 30),
(29, 'Helson Delamide', 'Japs', '57', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_31received_959092698492914.jpeg', 31),
(30, 'Jan Soriano', 'PANTHER', '95', '', 'bronze', 'src/public/user_pics/u_32inbound5165421589974056303.jpg', 32),
(31, 'Jay Aubrey Languido', 'Mnemosyne', '62', 'FEATHERWEIGHT', 'bronze', NULL, 33),
(32, 'PABLO TUAREZ', 'El Pablo', '69', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_34inbound889390704632420034.jpg', 34),
(33, 'Lloyd Sydlik N. Languido', 'Lloydie', '55', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_35received_645089241102458.jpeg', 35),
(34, 'Jazreill Josh H. Lagare', 'The Fearless', '63', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_36IMG_1193.jpeg', 36),
(35, 'Kim', 'Kimboy', '72', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_37inbound513972211743158899.jpg', 37),
(36, 'Kim', 'Kimboy', '72', 'MIDDLEWEIGHT', 'bronze', NULL, 38),
(37, 'David Mikhael Roque', 'Toproll Sushi', '68', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_39IMG_20230804_175507.jpg', 39),
(38, 'ISMAEL VILLASOR', 'Cliffhanger', '62', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_40backgrounderaser_1688575233.jpg', 40),
(42, 'George trazona', 'Bj', '55', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_44inbound2132288871901255429.jpg', 44),
(43, 'Verniel Judan', 'Niel', '58', 'FEATHERWEIGHT', 'bronze', NULL, 45),
(44, 'Rogen Acosta', 'Acero', '48', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_46FB_IMG_16908067141305831.jpg', 46),
(45, 'John Christopher ', 'John', '58', 'FEATHERWEIGHT', 'bronze', NULL, 47),
(46, 'Calvin Santos', 'The Cap', '85', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_48inbound716114400606312304.webp', 48),
(47, 'Marc King Apostol', 'Beast King', '105', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_49297B5444-75A4-42B3-A402-B01CF3547943.jpeg', 49),
(48, 'Anthony Reyes', 'Anthony', '68', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_50received_614095053544970.jpeg', 50),
(49, 'Joshua Taguiang ', 'Hammerhand', '70', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_51Max.jpg', 51),
(50, 'Vinz Roi Chiong', 'Big-Boy', '110', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_52ED97FD02-2816-4C87-ABC8-4B759EE6D564.jpeg', 52),
(51, 'Lumawig Tikboy', 'Tikboy', '57', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_53inbound3163866496046038768.jpg', 53),
(52, 'James paul malunes', 'JP', '80', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_54inbound5719550481603003659.jpg', 54),
(53, 'Jaycee P. Ochoa', 'BBD', '105', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_55Picsart_24-02-19_00-02-09-902.jpg', 55),
(54, 'Karlo Gevero', 'Man of Steel', '75', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_56IMG_0778.jpeg', 56),
(55, 'Carlos Lanzona', 'Pao', '130', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_57received_603788625244928.jpeg', 57),
(56, 'RD Galvan', 'Kingpin', '120', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_580-02-06-4ba4190e5181704d8833f7e9f35bfb4a2c5da1de988274e7d4f3661804fa768b_270cf9eca05.jpg', 58),
(57, 'Marco Oliveros', 'DADDY', '90', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_59inbound2396525450105828845.jpg', 59),
(58, 'Jig D. Canunayon ', 'JDC BOMBER ', '85', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_60received_879129029793271.jpeg', 60),
(59, 'SAMBUDDY RAMANSO', 'GOLDEN ANDROID', '56.8', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_61inbound7204600643371463239.jpg', 61),
(60, 'Nourishllantero ', 'Nourish', '67.9', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_62inbound1052186539257532467.jpg', 62),
(61, 'John Mark Leones', 'John Brzenk ', '58', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_63inbound3359661287270709210.jpg', 63),
(63, 'Mark Christopher De jesus', 'Commander', '76', 'MIDDLEWEIGHT', 'bronze', NULL, 65),
(65, 'Mark Christopher De jesus', 'Mentor', '76', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_67inbound8750635794691798854.jpg', 67),
(66, 'Oleg A. Aquino', 'The Beginner', '67', 'LIGHTWEIGHT', 'bronze', NULL, 68),
(67, 'Edcel Adigan', 'Muscle Man', '56', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_691691220938429.jpg', 69),
(68, 'John Angelo manuel', 'Lose streak', '65', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_70inbound5617592106559482488.jpg', 70),
(69, 'John Angelo manuel', 'The arm breaker', '65.5', 'LIGHTWEIGHT', 'bronze', NULL, 71),
(70, 'Bingbong', 'Bong', '66', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_72IMG_20230117_120948.jpg', 72),
(71, 'Brian ', 'Bankai', '63', '', 'bronze', 'src/public/user_pics/u_73Snapchat-159585784.jpg', 73),
(72, 'Gedison', 'Kilalanin nyoko', '70', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_74inbound8542532754384694095.jpg', 74),
(73, 'Gino De La Peña', 'The hooker', '69', 'LIGHTWEIGHT', 'bronze', NULL, 75),
(74, 'Gino De La Peña', 'Giant slayer', '69', 'LIGHTWEIGHT', 'bronze', NULL, 76),
(75, 'Lorenzo T. Villabroza ', 'Massimo ', '64', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_77IMG20230708192600.jpg', 77),
(76, 'Adrian romano', 'the hook', '67', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_78inbound6752384685387091347.jpg', 78),
(77, 'Veejay Ojeda Lumaquez', 'Flashpin Retsam', '86', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_79inbound4738643058294226024.jpg', 79),
(78, 'Dominic Ambaco', 'Domz', '65', 'LIGHTWEIGHT', 'bronze', NULL, 80),
(79, 'Lucien Valencia', 'Zhen', '80', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_81357149715_228009436779397_6369629433718927121_n.jpg', 81),
(80, 'Royce Sazon Casiple', 'Supremo', '83', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_82inbound4741285843553420765.jpg', 82),
(81, 'Ezekiel Santos', 'Chako', '79', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_83received_804969031441449.jpeg', 83),
(82, 'Genesis Sayo', 'Filipino Psycho', '85', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_84img_1_1691245955675.jpg', 84),
(83, 'Adonis Rocabo', 'Don Don', '62', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_85inbound1156107675.jpg', 85),
(85, 'Adonis rocabo', 'Don ', '62', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_87inbound-586365886.jpg', 87),
(86, 'Elias Jefferson Abrugena', 'Talisman', '85', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_881690110535484.jpg', 88),
(87, 'Angelo', 'Kuya A', '45', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_89inbound3293964365698092030.jpg', 89),
(88, 'Jomar Otilla', 'Jomar', '58', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_90356273422_244178418375772_2860591892494655118_n.jpg', 90),
(89, 'Noel Isaac Delos Santos ', 'ICE/Blizzard ', '110', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_91IMG_20221104_215200.jpg', 91),
(90, 'John Lester Gelim', 'Renzy Jr ', '56', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_92inbound1576699417848712292.jpg', 92),
(91, 'Patrick Marcelo', 'Toothless ', '45', 'FEATHERWEIGHT', 'bronze', NULL, 93),
(92, 'Diether Sevillena', 'The pinner', '85', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_94inbound8325362341468644082.jpg', 94),
(93, 'Ed delos Reyes', 'Ed', '92', 'HEAVYWEIGHT', 'bronze', NULL, 95),
(94, 'Denmark cañete casuela', 'Macmac', '70', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_96inbound948112634857680736.jpg', 96),
(95, 'Johnmer Morales', 'Invincible', '70', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_97FB_IMG_1691583425352.jpg', 97),
(96, 'Chast Clarence V. Baclay', 'Rence', '75', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_98', 98),
(97, 'Renz Dela Pena ', 'Renzo', '62', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_99inbound5709198896934912595.jpg', 99),
(98, 'Jhon Albert Umali ', 'CARMONA PULLERS ', '70.30', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_100inbound5211027388517088364.jpg', 100),
(100, 'Grengo M. Bautista', 'G.B', '57', 'FEATHERWEIGHT', 'bronze', NULL, 102),
(106, 'Grengo M. Bautista', 'G.B', '57', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_108inbound1841070320752156103.jpg', 108),
(109, 'Vince Kirby Panotes', 'TengGoods', '65', 'LIGHTWEIGHT', 'bronze', NULL, 111),
(110, 'Aaron Gabriel Romasanta ', 'Gab', '45', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_112inbound9204724064896742401.jpg', 112),
(112, 'Chim celones', 'Island boy', '90', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_114inbound8222535674167890741.jpg', 114),
(113, 'Vince Kirby Panotes', 'Vince ', '55', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_115inbound7240577729392226028.jpg', 115),
(114, 'Regin Amiel Posas', 'Egin', '67', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_116inbound5343593733520979763.jpg', 116),
(115, 'Kent Jayrald Tan', 'Raging Bull', '90', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_117IMG_8971.jpeg', 117),
(116, 'marlon', 'paje', '70', 'LIGHTWEIGHT', 'bronze', NULL, 118),
(117, 'marlon', 'jovan', '70', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_1191.jpg', 119),
(121, 'Reynald C. Torres', 'Kryptonite', '78', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_123inbound3008275378774547726.jpg', 123),
(122, 'Gab Martinez', 'Drunken Master', '85', 'FEATHERWEIGHT', 'bronze', NULL, 124),
(123, 'noel clemente ', 'troll of teresa', '53', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_125inbound7744119697086864938.jpg', 125),
(124, 'Marque Laiven Aguilar ', 'THE BODY FLICKER', '52', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_126inbound8632755128693731109.jpg', 126),
(125, 'Neo Arcinas', 'The Korean Reaper', '60', 'FEATHERWEIGHT', 'bronze', NULL, 127),
(127, 'Nick ', 'Boss nick', '90', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_129inbound9057865612216712591.jpg', 129),
(129, 'Leo Lejeta ', 'Tarzan', '78', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_131inbound3392049216551371041.jpg', 131),
(130, 'Jamil Usman', 'Fullbringer', '60', 'FEATHERWEIGHT', 'bronze', NULL, 132),
(131, 'Raynald Renz Roque ', 'HellBoy', '85', '', 'bronze', 'src/public/user_pics/u_133inbound1748226300353057549.jpg', 133),
(132, 'Steaven ron morla', 'The big man', '100', 'HEAVYWEIGHT', 'bronze', NULL, 134),
(133, 'Benedict Amurao', 'Ben Hur', '65', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_135inbound642110923878450980.jpg', 135),
(134, 'Kenneth Ngo', 'Bloodhound', '80', 'MIDDLEWEIGHT', 'bronze', NULL, 136),
(135, 'Reymund camiso', 'The lethal arm', '73', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_137inbound1181370714886734118.jpg', 137),
(137, 'Johndel Cruz ', 'Explosive Toproll', '80', '', 'bronze', 'src/public/user_pics/u_139inbound2357906623937223959.jpg', 139),
(138, 'Dwayne Rayver L Torres', 'Lil - SAVAGE', '65', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_140inbound4549303413354109638.jpg', 140),
(139, 'carl darell frilles', 'dada', '110', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_141', 141),
(140, 'Duane Gonzalez', 'Duane', '90', 'HEAVYWEIGHT', 'bronze', NULL, 142),
(141, 'Archie ', 'ichieyoh', '75', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_143inbound2590033128667184301.jpg', 143),
(142, 'Angelo Cutillas', 'Gelo', '58', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_144inbound725932740661922862.jpg', 144),
(143, 'John Vincent Dollete', 'Defender', '57', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_145inbound7388090959460954858.jpg', 145),
(144, 'ACE', 'Stronghold', '88', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_146inbound2511951783955254858.jpg', 146),
(145, 'Lemuel Cobra', 'Cutie ', '60', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_147inbound7253908440802762660.jpg', 147),
(146, 'Ronald Ng ', 'Ng ', '53', 'FEATHERWEIGHT', 'bronze', NULL, 148),
(147, 'Ronald Ng ', 'Ng ', '53', 'FEATHERWEIGHT', 'bronze', NULL, 149),
(148, 'Ronald Ng ', 'Ng ', '53', 'FEATHERWEIGHT', 'bronze', NULL, 150),
(149, 'Ronald Ng ', 'Ng ', '53', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_151Screenshot_20230808-014826_1.png', 151),
(150, 'Ahjie Soledad', 'Ah jie lang', '69', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_152received_1007574243738345.jpeg', 152),
(151, 'Nikko', 'Red', '78', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_153IMG_20230209_060328_379.jpg', 153),
(152, 'Arnel salundaguit ', 'Ace', '70', 'LIGHTWEIGHT', 'bronze', NULL, 154),
(153, 'Alan The Beast', 'BEAST', '59', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_155Snapchat-1575909826.jpg', 155),
(154, 'ROMY SAGUINSIN', 'Romy', '62', 'FEATHERWEIGHT', 'bronze', NULL, 156),
(155, 'John Paul Leonora ', 'ULING', '70', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_157FB_IMG_1691459120983.jpg', 157),
(156, 'Aljon Valiente', 'Aaron Man ', '52', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_158IMG_20230808_102750.jpg', 158),
(157, 'Michael Cuerdo Abrea ', 'The destroyer ', '73', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_159inbound6138447614540957447.jpg', 159),
(158, 'Shaun Chispa', 'Shaun', '75', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_160inbound6178196576318963008.jpg', 160),
(159, 'Rocky Jamang Saridol', 'Rock', '80', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_161received_828901758507675.jpeg', 161),
(160, 'Jamiro Pineda', 'Tres', '68', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_162655EF2A6-F0DC-4F7F-B394-9CD3ACC7DBC6.jpeg', 162),
(161, 'Jyms Hina', 'KOSOG SARIG', '85', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_163inbound6078280970326757776.jpg', 163),
(162, 'Joemari Rodriguez', 'The Humiliator', '62', 'FEATHERWEIGHT', 'bronze', NULL, 164),
(163, 'Jaycaris aran', 'Spiderjay', '60', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_165inbound2150255969914944138.jpg', 165),
(164, 'Ruzelle James A Patriana', 'JEM-NG-UNIVERS', '50', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_166inbound3103012087528135978.jpg', 166),
(165, 'Adrian', 'Adrian', '65', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_167IMG_5066.jpeg', 167),
(166, 'Jomer', 'EMROJ', '67', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_168inbound8193869422865982975.jpg', 168),
(167, 'Shane Daniel D. Dobles', 'The Secret Weapon ', '80', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_169IMG_20230802_143236_959.jpg', 169),
(168, 'JohnMark', 'Jm ', '64', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_170inbound7115655783228787515.jpg', 170),
(169, 'Ivan Gabriel Ramos', 'No Limits', '54', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_171inbound7435019802748354953.jpg', 171),
(170, 'Gil Andrei Soriano', 'AYE', '57', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_172', 172),
(171, 'Mark\' Noy sarandona', 'Noy\' the hooker', '68', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_173inbound6443306859479008275.jpg', 173),
(172, 'Lenel bajado', 'Kurt', '68', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_174inbound5188746129300637356.jpg', 174),
(173, 'Axell Mark A. Abel', 'Axell', '61', 'FEATHERWEIGHT', 'bronze', NULL, 175),
(174, 'Jhon mark bundalian', 'Mc', '57', 'MIDDLEWEIGHT', 'bronze', NULL, 176),
(175, 'Erlo matillano jugalbot ', 'erlo', '52', 'FEATHERWEIGHT', 'bronze', NULL, 177),
(176, 'James Ryan G. Briones ', 'James', '94', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_178inbound4771050186855727387.jpg', 178),
(177, 'Cristopher', 'Debelos', '56', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_179IMG_20230804_175546.jpg', 179),
(178, 'Alvin sanico', 'The Dominator', '62', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_180IMG_20230808_220912.JPG', 180),
(179, 'Christian A. Ilao', 'ThehappyIlao', '68', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_181inbound3790396462247617543.jpg', 181),
(180, 'Ayhan Rae Alindayo', 'Atlas', '88', 'FEATHERWEIGHT', 'bronze', NULL, 182),
(181, 'John Mark Cipriano ', 'Mark the Great ', '93', 'HEAVYWEIGHT', 'bronze', NULL, 183),
(182, 'John Mark Cipriano ', 'Mark the Great ', '93', 'HEAVYWEIGHT', 'bronze', NULL, 184),
(183, 'John Mark Cipriano ', 'Mark the Great ', '93', 'HEAVYWEIGHT', 'bronze', NULL, 185),
(184, 'Don Rocabo', 'Don Don', '63', 'FEATHERWEIGHT', 'bronze', NULL, 186),
(185, 'Kenjie torres', 'KenjieToproll', '45', 'FEATHERWEIGHT', 'bronze', NULL, 187),
(186, 'John Mark Cipriano ', 'Mark the Great ', '90', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_188inbound8387531949163901117.jpg', 188),
(187, 'Ronald Ng ', 'Ronald Ng ', '55', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_1891691517395452.jpg', 189),
(188, 'Glenn Enriquez', 'Bicep king', '85', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_190IMG_5680.png', 190),
(189, 'Adonis', 'DON TOPROLL', '63', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_191inbound-1517858785.jpg', 191),
(190, 'Jen abexxx', 'The shadow', '73', 'MIDDLEWEIGHT', 'bronze', NULL, 192),
(191, 'Jann Legend', 'wangnie', '70', 'LIGHTWEIGHT', 'bronze', NULL, 193),
(192, 'John Michael Abapo', 'John Abaps', '61', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_194inbound3431556694849296836.jpg', 194),
(193, 'Jhervin Javier', 'Picolo', '105', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_195inbound6011351527087530280.jpg', 195),
(194, 'Jhervin Javier', 'Picolo', '105', 'HEAVYWEIGHT', 'bronze', NULL, 196),
(195, 'Jun soledad', 'Boss jun', '80', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_197Screenshot_20230816_180352_Gallery.jpg', 197),
(196, 'Bryan aranas', 'Caaaarl', '61', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_198inbound6727652501887033548.jpg', 198),
(197, 'Michael Shin', '\'\'The Great Balmon\"', '68', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_199inbound7289644793150299137.jpg', 199),
(198, 'Michael Shin', '\"The Great Balmon\"', '68', 'LIGHTWEIGHT', 'bronze', NULL, 200),
(199, 'Michael Shin', '\"The Great Balmon\"', '68', 'LIGHTWEIGHT', 'bronze', NULL, 201),
(200, 'Michael Shin', '\"The Great Balmon\"', '68', 'LIGHTWEIGHT', 'bronze', NULL, 202),
(201, 'Michael Fuentes', '\"The Great Balmon\"', '67', 'LIGHTWEIGHT', 'bronze', NULL, 203),
(202, 'Michael Fuentes', 'The Great Balmon', '68', 'LIGHTWEIGHT', 'bronze', NULL, 204),
(203, 'Michael Fuentes', 'The Great Balmon', '68', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_205inbound5585847273455144987.jpg', 205),
(204, 'Regie D. Almazar', 'EIGER', '70', '', 'bronze', 'src/public/user_pics/u_206inbound432634711213597004.jpg', 206),
(205, 'jose bryan alde', 'silent', '56', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_207inbound2644706820944025738.jpg', 207),
(206, 'JEFF JOSHUA MADJOS', 'GIANTSLAYER', '63', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_208Screenshot_2023-08-09-13-10-36-15_99c04817c0de5652397fc8b56c3b3817.jpg', 208),
(207, 'Adonis Rocabo', 'DON DON', '62', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_209inbound-1187547506.jpg', 209),
(208, 'John Paul Moral', 'Boss Joel', '75', 'MIDDLEWEIGHT', 'bronze', NULL, 210),
(209, 'John Hener Baro', 'Handsome', '65', '', 'bronze', 'src/public/user_pics/u_211inbound917469406399622151.jpg', 211),
(210, 'Reden 0melig', 'Redbull', '58', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_21220230725_141912.jpg', 212),
(211, 'Wilson Mendoza', 'Devon', '46', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_213inbound2765501281600386246.jpg', 213),
(212, 'Joshua faciol', 'Joshweng ', '52', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_214inbound1244323219311208272.jpg', 214),
(213, 'Joshua faciol', 'Joshweng ', '52', 'FEATHERWEIGHT', 'bronze', NULL, 215),
(214, 'JEFF JOSHUA MADJOS', 'GIANT SLAYER', '63', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_216IMG_20230809_194106.jpg', 216),
(215, 'Jonald Onggay', 'Jonald ', '70', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_217inbound7634090449220311194.png', 217),
(216, 'Julio abella', 'The shadow', '72', 'MIDDLEWEIGHT', 'bronze', NULL, 218),
(217, 'Alex Jun Dellaba', 'AJ', '70', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_219inbound8898137684695454632.jpg', 219),
(218, 'Alex Jun Dellaba', 'AJ', '70', 'LIGHTWEIGHT', 'bronze', NULL, 220),
(219, 'Cristopher debelos', 'Divine sonic', '56', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_2211691586749955.jpg', 221),
(220, 'Cristopher debelos', 'Baby boss', '56', 'FEATHERWEIGHT', 'bronze', NULL, 222),
(221, 'Marlou abayon', 'Maloyy', '57', '', 'bronze', 'src/public/user_pics/u_22316915869550746406291648022274103.jpg', 223),
(222, 'Alex Jun Dellaba', 'Big Kiddo', '70', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_2241691281425746.jpg', 224),
(223, 'Kenjie torres ', 'Unstoproll ', '43', 'FEATHERWEIGHT', 'bronze', NULL, 225),
(224, 'Roman Bernardo ', 'Maman', '105', '', 'bronze', 'src/public/user_pics/u_226inbound7796496259742699629.jpg', 226),
(225, '', '', '70', '', 'bronze', NULL, 227),
(226, 'Christian cajida', 'The middle man', '110', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_228inbound5727284752987079374.jpg', 228),
(227, 'Francis John Adrian Acuesta', 'Pirate', '90', '', 'bronze', 'src/public/user_pics/u_229inbound2508231882881362677.jpg', 229),
(228, 'Shinna may', 'Shin', '60', 'FEATHERWEIGHT', 'bronze', NULL, 230),
(229, 'Mark denver logdat', 'XxX', '70', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_231IMG_7984.jpeg', 231),
(230, 'Jazzley Morales', 'Flash', '62', 'FEATHERWEIGHT', 'bronze', NULL, 232),
(231, 'Roman Bernardo', 'Maman', '105', 'HEAVYWEIGHT', 'bronze', NULL, 233),
(232, 'Marvin Dela cruz', 'brando', '67', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_234inbound7082267427505000549.jpg', 234),
(233, 'Marvin Dela cruz', 'brando', '67', 'LIGHTWEIGHT', 'bronze', NULL, 235),
(234, 'Marvin Dela cruz', 'brando', '67', 'LIGHTWEIGHT', 'bronze', NULL, 236),
(235, 'Marvin Dela cruz', 'brando', '67', 'LIGHTWEIGHT', 'bronze', NULL, 237),
(236, 'Marvin Dela cruz', 'brando', '67', 'LIGHTWEIGHT', 'bronze', NULL, 238),
(237, 'Jemuel Longgakit', 'The silent assassin', '58', 'FEATHERWEIGHT', 'bronze', NULL, 239),
(238, 'Jemuel Longgakit', 'The silent assassin', '58', 'FEATHERWEIGHT', 'bronze', NULL, 240),
(239, 'Jemuel Longgakit', 'The silent assassin', '58', 'FEATHERWEIGHT', 'bronze', NULL, 241),
(240, 'Jemuel Longgakit', 'The silent assassin', '58', 'FEATHERWEIGHT', 'bronze', NULL, 242),
(241, 'Jemuel Longgakit', 'The predator', '58', 'FEATHERWEIGHT', 'bronze', NULL, 243),
(242, 'Mauro Tagaan jr', 'Junjun', '56', 'FEATHERWEIGHT', 'bronze', NULL, 244),
(243, 'Vicente de Castro', 'Vic', '68', 'LIGHTWEIGHT', 'bronze', NULL, 245),
(244, 'Robertson Velasco', 'Nobita', '86', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_246inbound6776713309516547729.jpg', 246),
(245, 'Jeffrey Belamide', 'Totoy Devon', '73', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_247inbound6166692065192403441.jpg', 247),
(246, 'Raphael Jam B. Valera', 'Underdog', '120', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_248IMG_20230503_032353.jpg', 248),
(247, 'Aljhon toting', 'Aljhon', '80', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_249Screenshot_2023-08-13-14-31-29-34_99c04817c0de5652397fc8b56c3b3817.jpg', 249),
(248, 'Brian Orbaña', 'Bry', '60', 'FEATHERWEIGHT', 'bronze', NULL, 250),
(249, 'Belmart ', 'Hooker ', '50', 'FEATHERWEIGHT', 'bronze', NULL, 251),
(250, 'Belmart ', 'Hooker ', '50', 'FEATHERWEIGHT', 'bronze', NULL, 252),
(251, 'Belmart ', 'Hooker ', '50', 'FEATHERWEIGHT', 'bronze', NULL, 253),
(252, 'RADZMIR B, SASAPAN', 'milsam the legend', '60', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_254inbound4517361027645621294.jpg', 254),
(253, 'Alfredo g felix jr', 'ANDROID KA-BALI', '65', 'LIGHTWEIGHT', 'bronze', 'src/public/user_pics/u_255inbound2427457722123633532.jpg', 255),
(254, 'Alfredo g felix jr', 'ANDROID KA-BALI', '65', 'LIGHTWEIGHT', 'bronze', NULL, 256),
(255, 'Fredo felix jr', 'ANDROID KA-BALI', '65', 'LIGHTWEIGHT', 'bronze', NULL, 257),
(256, 'John prince', 'Black funter', '49', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_258received_1349985272271919.jpeg', 258),
(257, 'John prince', 'Black funter', '49', 'FEATHERWEIGHT', 'bronze', NULL, 259),
(258, 'Jordan Quimora', 'FARMBOY', '82', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_260inbound705458138993568519.jpg', 260),
(259, 'Remegio Ramos Mendoza jr.', 'Rem ', '54', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_261inbound2823231548841053267.jpg', 261),
(260, 'Franz Jayden A. Torres', 'Franz', '48', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_262Picsart_23-07-24_02-24-27-334.jpg', 262),
(261, 'Clark ogalesco', 'Clark king', '62', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_263inbound5185458536142358326.jpg', 263),
(262, 'Leo Angelo Fayo', 'Leo the 1st', '57', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_264383879795_216711334746633_5288990134571090186_n.jpg', 264),
(263, 'Allin', 'Lin', '57.20', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_265image.png', 265),
(264, 'Timothy Magante', 'Moty', '55.65', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_266image.png', 266),
(265, 'Leo Legaspi', 'Leo', '72.30', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_267FB_IMG_1697495923747.jpg', 267),
(266, 'Jericho Ruel Lopez', 'JEK', '92', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_268IMG_20231222_210329.jpg', 268),
(267, 'rhan cethric l legaspi', 'cedrick', '70', 'LIGHTWEIGHT', 'bronze', NULL, 269),
(268, 'Isaac Gulapa', 'Newton', '55.4', '', 'bronze', 'src/public/user_pics/u_270393087803_742314104447886_8072786139368824820_n.jpg', 270),
(269, 'zhairis', 'zhai', '60', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_271inbound217978907468942839.jpg', 271),
(270, 'Norvin Ladion ', 'Norvin ', '58', 'FEATHERWEIGHT', 'bronze', NULL, 272),
(271, 'Alvin Carpio', 'CARPIO', '80', 'MIDDLEWEIGHT', 'bronze', 'src/public/user_pics/u_273inbound5264012826229566053.jpg', 273),
(272, 'Alvin Carpio', 'CARPIO', '80', 'MIDDLEWEIGHT', 'bronze', NULL, 274),
(273, 'Jomarie Gilhang', 'Joms', '61', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_275inbound6514428181187763476.jpg', 275),
(274, 'Janina Santos', 'Janina', '48', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_276IMG_20231127_204026_296.jpg', 276),
(275, 'Juluis Albert Santiago', 'Night night', '70', 'LIGHTWEIGHT', 'bronze', NULL, 277),
(276, 'Yuki', 'Yukimbo', '51', 'FEATHERWEIGHT', 'bronze', 'src/public/user_pics/u_278IMG_7671.jpeg', 278),
(277, 'Miggy Rosal', 'GOOD-BOY', '73', '', 'bronze', 'src/public/user_pics/u_279IMG_20240219_011252.jpg', 279),
(278, 'JOHN KENNETH NOCIDO', 'BUBOY', '104', 'HEAVYWEIGHT', 'bronze', 'src/public/user_pics/u_280inbound4529199418935182975.jpg', 280);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tanat`
--

CREATE TABLE `tbl_tanat` (
  `id` int(11) NOT NULL,
  `fullname` text NOT NULL,
  `weight` text NOT NULL,
  `mobile_no` text NOT NULL,
  `shirt_size` text NOT NULL,
  `league` text NOT NULL,
  `category` text NOT NULL,
  `payment_dir` text NOT NULL,
  `payment_name` text NOT NULL,
  `payment_ref_no` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_tanat`
--

INSERT INTO `tbl_tanat` (`id`, `fullname`, `weight`, `mobile_no`, `shirt_size`, `league`, `category`, `payment_dir`, `payment_name`, `payment_ref_no`) VALUES
(1, 'test', '85', '09171077268', 'XL', 'AMATEUR', 'RIGHT HAND', 'src/public/students_payment_proof/2503347380848_797640451715536_1654682268269166659_n.jpg', 'test', '1');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tournament_registration`
--

CREATE TABLE `tbl_tournament_registration` (
  `id` int(11) NOT NULL,
  `puller_name` varchar(200) NOT NULL,
  `weight` varchar(200) NOT NULL,
  `gcash_name` varchar(200) NOT NULL,
  `gcash_no` varchar(200) NOT NULL,
  `gcash_ref` varchar(200) NOT NULL,
  `ticket_no` varchar(200) NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_tournament_registration`
--

INSERT INTO `tbl_tournament_registration` (`id`, `puller_name`, `weight`, `gcash_name`, `gcash_no`, `gcash_ref`, `ticket_no`) VALUES
(14, 'Lim Cobra ', 'Featherweight', 'Lemuel I', '09958870117', '1012 324 996896', 'IFAXRcIjb0'),
(15, 'Sky ', 'Lightweight', 'Michelle giganto', '09516632331', '', 'FRvif7XgRE'),
(16, 'Sky ', 'Lightweight', 'Michelle giganto', '09516632331', '', 'Ql3wHf6S0k'),
(17, 'Sky ', 'Lightweight', 'Michelle giganto', '09516632331', '4012343010789', 'O97HiP9WTn'),
(18, 'Sky ', 'Lightweight', 'Michelle giganto', '09516632331', '4012343010789', 'ldiNyTgMUG'),
(19, 'LUCENA ARMSQUAD ', 'Middleweight', 'Rovina Quimora ', '09517603405', '6012 381 076205', 'xOczM71rLe'),
(20, 'LUCENA ARMSQUAD ', 'Middleweight', 'Rovina Quimora ', '09517603405', '6012 381 076205', 'qERTYLzFSR'),
(21, 'James Martinne De jesus', 'Featherweight', 'James Martinne De jesus', '09617485432', '6012 526 258730', 'GjCgVkjM01'),
(22, 'James Martinne De jesus', 'Featherweight', 'James Martinne De jesus', '09617485432', '6012 526 258730', 'f7NC46Axja'),
(23, 'James Martinne De jesus', 'Featherweight', 'James Martinne De jesus', '09617485432', '6012 526 258730', 'iGtOwFhTjR'),
(24, 'Carlyn may', 'Featherweight', 'James Martinne De jesus', '09617485432', '6012 526 258730', 'rd8ucrqOdD');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `access_level` int(11) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `username`, `password`, `access_level`, `email`) VALUES
(16, 'kdl0712', 'tatagph', 1, 'kdlanguido@gmail.con'),
(20, 'KobiTaguro17', 'xhan0202', 1, 'xhanplayz@gmail.com'),
(21, 'EHNZO', 'cadizehnzo', 1, 'ehnzocadiz@gmail.com'),
(25, 'Jasper jay edolog ', 'jasper jay edolog', 1, 'jasperjayedolog2@gmail.com'),
(26, 'chandler', '20060219', 1, 'delachandler2@gmail.com'),
(27, 'vienfrancis0', 'Polaroid', 1, 'franciscesista43@gmail.com'),
(28, 'cikko', 'tacatph', 1, 'cikko@gmail.com'),
(29, 'Llameskirby', '59921346', 1, 'liameskirby001@gmail.com'),
(30, 'stepshocks', 'hitman01', 1, 'stepshocks@yahoo.com'),
(31, 'Japshelson18@gmail.com', 'Hdi199618', 1, 'Japshelson18@gmail.con'),
(32, 'Jan', 'janjankulapo99999', 1, 'janbs545@gmail.com'),
(33, 'mnemosyne', '86247931', 1, 'jaydlanguido@gmail.com'),
(34, 'El Pablo', 'PabloTuarez0517', 1, 'pablotuarez32@gmail.com'),
(35, 'lloydlanguido21', 'aatrox21', 1, 'lloydlanguido@gmail.com'),
(36, 'joshlagare1', 'joshlolo123', 1, 'joshlagare1@gmail.com'),
(37, 'Kim', 'Kim081990', 1, 'kimendrina08@gmail.com'),
(39, 'davidmikhaelroque@gmail.com', 'David123654789', 1, 'davidmikhaelroque@gmail.com'),
(40, 'Ismaelvillasor', 'nothingtoxic', 1, 'ismaelvillasor@gmail.com'),
(44, 'Trazona', 'george', 1, 'georgetrazona76@gmail.com'),
(45, 'Verniel.judan', '04-23-2003', 1, 'judan.verniel008@gmail.com'),
(46, 'rogenacosta051006', '09089800184', 1, 'acostajeseca@gmail.com'),
(47, 'John', '09564765185', 1, 'johnchristophercapinpin@gmail.com'),
(48, 'Kapitan', 'zxcasdqwe', 1, 'calvin.kier.santos.21@gmail.com'),
(49, 'beastking', 'M@rcdb34stk1ng', 1, 'marcking2245@gmail.com'),
(50, 'anthonyreyes199614', 'francheskaangelo', 1, 'anthonyreyes199614@gmail.com'),
(51, 'jptaguiang', 'Heavyweoponsguy', 1, 'joshtaguiang@gmail.com'),
(52, 'Vinz Chiong', '121425', 1, 'chiongvinz52@gmail.com'),
(53, 'Ninjaboy', 'lumawigtikboy06', 1, 'randyaguino11@gmail.com'),
(54, 'JPM101', 'jpmbembembem2023', 1, 'malunesjamespaul@gmail.com'),
(55, 'Ochoa', 'ato15962', 1, 'jaycee0211ochoa@gmail.com'),
(56, 'yobi06', '4585098', 1, 'jankarlo.gevero@gmail.com'),
(57, 'deathill777', 'bardstale77', 1, 'lanzonacarlos@gmail.com'),
(58, 'Kingpin77', 'Lebiathan77', 1, 'ralph2217@gmail.com'),
(59, 'Marco23', 'Antipolo#1', 1, 'marcolorenzooliveros2020@gmail.com'),
(60, 'JDCBOMBER001', 'Jdc@001', 1, 'jdcbomber@gmail.com'),
(61, 'Iam', 'domedondoxomedon', 1, 'sambuddy369@gmail.com'),
(62, 'Nourish', 'nourish15', 1, 'nourishllantero15@yahoo.com'),
(63, 'Johnmark', 'Leones29', 1, 'leonesjohnmark58@gmail.com'),
(64, 'Toffeearmsquad', 'toffeearmsquadlucena', 1, 'dejesusmarkchristopher@gmail.com'),
(65, 'Toffeearmsquad', 'toffeelucena', 1, 'dejesusmarkchristopher@gmail.com'),
(66, 'TBreaker09', 'Tbreakerrr', 1, 'olegaquino@gmail.com'),
(67, 'Armsquadtoffee', 'armsquadlucena', 1, 'harumidearjesus@gmail.com'),
(68, 'Olegskieee09', 'Tbreaker09', 1, 'olegaquino@gmail.com'),
(69, 'Edceladigan', 'airaaira', 1, 'edceladigan31@gmail.com'),
(70, 'Mario ', 'mario121223', 1, 'johnangelomanuel@gmail.com'),
(71, 'Mario ', 'mario121223', 1, 'johnangelomanuel@gmail.com'),
(72, 'Bingbong', 'sawsawqqq', 1, 'bongcanlas015@yahoo.com'),
(73, 'Brian', 'brianfajutagana', 1, 'fajutaganabrian@gmail.com'),
(74, 'Gedison', 'gedison', 1, 'gedengselena22@gmail.com'),
(75, 'The  hooker', '09956480920', 1, 'ginoako123456@gmail.com'),
(76, 'Giant slayer', '09956480920', 1, 'ginoako123456@gmail.com'),
(77, 'VILLABROZA ', 'lorenzopogi123', 1, 'villabrozaantonio@gmail.com'),
(78, 'Adrian12345', 'thehook', 1, 'romanoadrian2009@gmail.com'),
(79, 'Jaburant', '12bujalumaquez', 1, 'lumaquezveejay12@gmail.com'),
(80, 'dominic793', 'Inosuke793!', 1, 'dominicambaco793@gmail.com'),
(81, 'Zhen', 'bl4z3master', 1, 'lucienvalencia85@gmail.com'),
(82, 'supremozxc', 'shanitazxc', 1, 'royce.sazon@gmail.com'),
(83, 'chako9999', 'AWPChako99', 1, 'r.ezekiel.santos@gmail.com'),
(84, 'asdfgenesis', 'Nostalgia122297', 1, 'asdfgenesiszxc@gmail.com'),
(85, 'Adoknows1997', 'adonis01012023', 1, 'Kennethmorant43@yahoo.com'),
(87, 'Adoknows09', 'Adoknows09', 1, 'Adonisrocabo@yahoo.com'),
(88, 'Talisman', 'Thunder21215', 1, 'jeffersonabrugena@gmail.com'),
(89, 'angelo', 'angelocano123', 1, 'angelocano123@email.com'),
(90, 'Jomarotilla', 'baliwjomar', 1, 'Jomarotilla@email.com'),
(91, 'Ice27', 'redpepper9', 1, 'isaacdelossantos99@gmail.com'),
(92, 'Lester', 'Gelim123', 1, 'johnlestergelim67@gmail.com'),
(93, 'Toothless', 'patrick021605', 1, 'patrick.marcelo016@gmail.com'),
(94, 'Tapatanpuller', 'puller17', 1, 'maystarstockmands.17@gmail.com'),
(95, 'Edel delos Reyes', 'toledo22', 1, 'delosreyesed30@gmail.com'),
(96, 'Denmark ', 'makoy', 1, 'denmarkcasuela852@gmail.com'),
(97, 'johnmer', 'johncarlmorales', 1, 'moralesjohnmer64@gmail.com'),
(98, 'chasieee', 'Killerbee123', 1, 'chast.clarence.baclay@gmail.com'),
(99, 'Renzo', '123456', 1, 'renzdelapeña@yaho.com'),
(100, 'Jhon Albert Umali ', 'jhon08', 1, 'jhonlet080523@gmail.com'),
(101, 'Brai', 'bhiee10', 1, 'brianorbana856@gmail.com'),
(102, 'Grengo b.', 'gmbautista', 1, 'grengobautista2@gmail.com'),
(103, 'Brian Orbaña ', 'bhiee10', 1, 'brianorbana856@gmail.com'),
(104, 'Brian Orbaña ', 'bhiee10', 1, 'brianorbana856@gmail.com'),
(105, 'Brian Orbaña ', 'bhiee10', 1, 'brianorbana856@gmail.com'),
(106, 'Brian Orbaña ', 'bhiee10', 1, 'brianorbana856@gmail.com'),
(107, 'Brian Orbaña ', 'bhiee10', 1, 'brianorbana856@gmail.com'),
(108, 'GBAUTISTA', 'gmbautista', 1, 'grengobautista2@gmail.com'),
(109, 'Brian Orbaña', 'bhiee10', 1, 'brianorbana856@gmail.com'),
(110, 'Brian Orbaña', 'bhiee10', 1, 'brianorbana856@gmail.com'),
(111, 'Vincekirby', 'goodsteng204060', 1, 'vincekirbyteng@gmail.com'),
(112, 'useyourcoconut23', 'dunkindonut', 1, '09192927617aaron@gmail.com'),
(113, 'useyourcoconut23', 'dunkindonut', 1, '09192927617aaron@gmail.com'),
(114, 'Chimcelones', 'chimchim022800', 1, 'eguiachim@gmail.com'),
(115, 'Teng', 'tengteng', 1, 'Vince_kirby@yahoo.com'),
(116, 'Reginamielposas', 'armsquad', 1, 'posasamiel@gmail.com'),
(117, 'Kenttan', 'mindanaostrongarm', 1, 'cpt.flex@gamil.com'),
(118, 'marlon', '123456', 1, 'marlon@email.com'),
(119, 'bottingm', 'cardo', 1, 'marlon123@email.com'),
(121, 'Reynald07', '143447', 1, 'torresreynald70@gmail.com'),
(122, 'Reynald07', '143447', 1, 'torresreynald70@gmail.com'),
(123, 'Reynald07', 'reynald07', 1, 'torresreynald70@gmail.com'),
(124, 'Drunken Master', 'Badogie15', 1, 'gab.tmartinez15@gmail.com'),
(125, 'noel.clemnte@gmail.com', 'CLl6T@8m@qXefsK', 1, 'noel.clemnte@gmail.com'),
(126, 'marquelaivenaguilar@gmail.com', 'raelai15', 1, 'marquelaivenaguilar@gmail.com'),
(127, 'befunky23', 'marcneomama2003', 1, 'marcneoarcinasarriba@gmailc.om'),
(128, 'Thetarzan', 'jihnleo02', 1, 'johnleolejeta@gmail.com'),
(129, 'Nickbayya@gmail', 'bossnick', 1, 'Nickbayya@gmail'),
(130, 'Thetarzan', 'jihnleo02', 1, 'johnleolejeta@gmail.com'),
(131, 'Johnleo02', 'johnleo02', 1, 'leolejeta@gmail.com'),
(132, 'Hard', 'numerouspass556', 1, 'jamilarch21@gmail.com'),
(133, 'znerine', '123Qweasd', 1, 'raynaldrenzroque@gmail.com'),
(134, 'Steav', 'sibakero22', 1, 'cocosibakero@gmail.com'),
(135, 'benhur', 'benhur17', 1, '17benhur@gmail.com'),
(136, 'kennykush', 'flexforall27', 1, 'kennethngo143@gmail.com'),
(137, 'THE LETHAL ARM', 'camiso300416', 1, 'reymundcamiso@gmail.com'),
(138, 'Camanava pullers', 'camanavapullers2023', 1, 'johndel.cruz@yahoo.com'),
(139, 'Johndelcruz2020vlog', 'camanavapullers2023', 1, 'blesseherrera2020@gmail.com'),
(140, 'Dwayne22', 'dwayne22', 1, 'dwaynerayver22@gmail.com'),
(141, 'dadabeth2525', 'elizabethfong2525', 1, 'carl.darell@071825gmail.com'),
(142, 'DuaneGonzalez', 'timothyduane', 1, 'timothyduanegonzalez@gmail.com'),
(143, 'archiepabonita', 'archie2003', 1, 'archiepabonita@gmail.com'),
(144, 'Angelocutillas', 'Cutillas07', 1, 'cutillasjhay55@gmail.com'),
(145, 'The Defender', 'floralastrocat08', 1, 'jvdollete0123@gmail.com'),
(146, 'Stronghold10', 'stronghold1100', 1, 'acehabdumon010@gmail.com'),
(147, 'Lemuelcobra ', 'cobra24', 1, 'kunlim30@gmail.com'),
(148, 'ronaldng', '11301999ng', 1, 'ronaldng014@gmail.com'),
(149, 'ronaldng', '11301999ng', 1, 'ronaldng014@gmail.com'),
(150, 'ronaldng', '11301999ng', 1, 'ronaldng014@gmail.com'),
(151, 'Ronald Ng', '11301999ng', 1, 'ronaldng014@gmail.com'),
(152, 'Ah jie', 'aw4iviad', 1, 'ahjiekurosaki@gmail.com'),
(153, 'Nickwild123', '199513', 1, 'jalovernikko@gmail.com'),
(154, 'Northcaloocan', 'pullers', 1, 'salundaguitarnel@gmail.com'),
(155, 'Beast001', '09071132627', 1, 'aguilarjonalyn89@gmail.com'),
(156, 'Romy1993', 'Hanah123', 1, 'fromzy11@gmail.com'),
(157, 'johnpaul07', 'johnpaulrhaine', 1, 'leonorajohnpaul22222@gmail.com'),
(158, 'Babang10', '09102019', 1, 'avaliente.mosc@gmail.com'),
(159, 'Mike', 'papaalpha', 1, 'scout.adkins042@gmail.com'),
(160, 'Shaunchispa04', 'shaunchispa', 1, 'shaunchispa04@gmail.com'),
(161, 'rocky051985', 'gwenrock2010', 1, 'rockyjamangsaridol@gmail.com'),
(162, 'jamiropineda03', 'jamiropineda003', 1, 'jamiropineda003@gmail.com'),
(163, 'Jyms Hina', 'KOSOGSARIG23', 1, 'hinajimmyfer@gmail.com'),
(164, 'Jomski007', '10023345', 1, 'levanisstrong@gmail.com'),
(165, 'Jaycarisaran', 'JAYden14', 1, 'aldenlawrence14@gmail.com'),
(166, 'ateopenmic', 'Password', 1, 'ruzellepatriana172@gmail.com'),
(167, 'Adrian Dellomes', 'adriandellomes21', 1, '09477934237'),
(168, 'jomercalica', 'joyskie19', 1, 'calicajomer2@gmail.com'),
(169, 'The Secret Weapon ', 'naomileiurbanes', 1, 'shanedobles57@gmail.com'),
(170, 'Jm_magat@08', '081992', 1, 'johnhagoromo08@gmail.com'),
(171, 'IVAN RAMOS', 'jisica18', 1, 'ivangabrielsvramos@gmail.com'),
(172, 'AYE', 'aye11', 1, 'sorianogilandrei@gmail.com'),
(173, 'Marco babalo', 'marcobabalo', 1, 'marksarandona@gmail.com'),
(174, 'Lencassy1803@gmail.com', 'LBajado15', 1, 'annabelbongato@gmail.com'),
(175, 'Axellabel', '!qazxsw@', 1, 'axelabel08@gmail.com'),
(176, 'Jhon mark ', '2020armloyal', 1, 'jhonmark@gmail.com'),
(177, 'erlo', 'erlopogi', 1, 'erlomatillanojugalbot@gmail.com'),
(178, 'James Briones ', 'James09021999*', 1, 'brionesjamesryang.02@gmail.com'),
(179, 'cristopher.debelos.9', 'DONTWAKEMEUP', 1, 'cristopherdebelos@gmail.com'),
(180, 'Jonjonx123x', '09353811894123', 1, 'jonjonsanico@gmail.com'),
(181, 'ThehappyIlao', 'plehe03cutie', 1, 'christian.ilao303@gmail.com'),
(182, 'ayhanrae24', '112404', 1, 'alindayoayhan@gmail.com'),
(183, 'Johnmarkcipriano1986', 'macky100110', 1, 'cancer062986@gmail.com'),
(184, 'Johnmarkcipriano1986', 'macky100110', 1, 'cancer062986@gmail.com'),
(185, 'Johnmarkcipriano1986', 'macky100110', 1, 'cancer062986@gmail.com'),
(186, 'Dondon09', 'Dondon09', 1, 'Dondon@yahoo.com'),
(187, 'KenjieToproll ', '09300670222', 1, 'torreskenjie99@gmail.com'),
(188, 'Johnmarkcipriano@gmail.com', 'macky100110', 1, 'johnmarkcipriano@gmail.com'),
(189, 'Ronald Huang ', '103046ng', 1, 'ngmarisa10@gmail.com'),
(190, 'Genriquez', 'lokigioboy', 1, 'glennenrix@gmail.com'),
(191, 'Dontoproll', 'Dontoproll', 1, 'Dontoproll@yahoo.com'),
(192, 'Jenrey04', 'abella04', 1, 'abellajenry8@gmail.com'),
(193, 'salak134', 'salak134', 1, 'jannlegend@gmail.com'),
(194, 'Johnabaps7 ', 'Founder37', 1, 'johnmichaelabapo7@yahoo.com'),
(195, 'jhervin', 'jhervin04171998', 1, 'jhervin012314@gmail.com'),
(196, 'jhervin', 'jhervin04171998', 1, 'jhervin012314@gmail.com'),
(197, 'Jun soledad', 'Psj091878', 1, 'jun_soledadii@yahoo.com'),
(198, 'Carlluiz', 'carl11', 1, 'bryanaranas709@gmail.com'),
(199, 'MichaelShin', '050621', 1, 'shanebalmon@gmail.com'),
(200, 'Balmon5', 'thegreat', 1, 'shanebalmon@gmail.com'),
(201, 'Balmon5', 'thegreat', 1, 'shanebalmon5@gmail.com'),
(202, 'Balmon5', 'thegreat', 1, 'michaelshin@gmail.com'),
(203, 'Balmon5', 'thegreat', 1, 'michaelshin@gmail.com'),
(204, 'Fuentes5', 'balmon5', 1, 'fuentes@gmail.com'),
(205, 'Fuentes', 'balmon', 1, 'retchelmendoza54@gmail.com'),
(206, 'Eiger', '09488003844', 1, 'eigerrazamla@gmail.com'),
(207, 'Josebryanalde08', 'josebryanalde08', 1, 'josebryanalde08@gmail.com'),
(208, 'Jeffjoshua', 'Laguindinganpullers', 1, 'jjeffjoshuamadjos@gmail.com'),
(209, 'Dondon1997', 'Dondon09', 1, 'Dondon09@yahoo.com'),
(210, 'Johnpaul Moral', 'johnpaul0218', 1, 'johnpaulmoral4@gmail.com'),
(211, 'John Hener', 'handsome', 1, 'jh.baro0534@gmail.com'),
(212, 'Red', '030405', 1, 'omeligredentor@gmail..com'),
(213, 'Wilsonmendoza', 'wilson25', 1, 'althea.cambronero.03@gmail.com'),
(214, 'Joshua', 'jushwa123', 1, 'jushwafaciol737@gmail.com'),
(215, 'Joshua', 'jushwa123', 1, 'jushwafaciol737@gmail.com'),
(216, 'Jeffjoshuamadjos', '5263', 1, 'jepjoswamadjos@gmail.com'),
(217, 'Jonald Onggay ', 'jonald141990', 1, 'jonald24onggay@gmail.com'),
(218, 'Julio04', 'jenry04', 1, 'a00860903@gmail.com'),
(219, 'AJ ', 'jandel02', 1, 'alexjundellaba983@gmail.com'),
(220, 'AJ ', 'jandel02', 1, 'alexjundellaba983@gmail.com'),
(221, 'cristopher.debelos.9', 'DONTWAKEMEUP06', 1, 'cristopherdebelos@gmail.com'),
(222, 'cristopher.debelos.9', 'DONTWAKEMEUP06', 1, 'cristopherdebelos@gmail.com'),
(223, 'Marlou abayon', 'MARLOU92', 1, 'Marlouabayon@gmail.com'),
(224, 'Big kiddo', 'gwapoko', 1, 'maeflordellaba870@gmail.com'),
(225, 'Unstoproll', '09300670222', 1, 'kenjietorres99@gmail.com'),
(226, 'Roman Bernardo ', 'ninongmokmok', 1, 'bernardoroman62@yahoo.com'),
(227, 'JPalomo', '06160128', 1, 'coronbunongbraso@gmail.com'),
(228, 'Christiancajida787@gmail.com', '@061088armwrestling', 1, 'christiancajida787@gmail.com'),
(229, 'Francis023', 'Chianti023@', 1, 'Francisacuesta559@gmail.com'),
(230, 'Shinz', 'rraize1313', 1, 'bshinna@gmail.com'),
(231, 'Denver', 'denver', 1, 'denverlogdat@gmail.com'),
(232, 'jazzley', 'jazzleymorales', 1, 'jumbo24@gmail.com'),
(233, 'Roman Bernardo ', 'ninongmokmok', 1, 'bernardoroman62@yahoo.com'),
(234, 'brando', 'Myrlene1983', 1, 'md12280923@gmail.com'),
(235, 'brando', 'Myrlene1983', 1, 'md12280923@gmail.com'),
(236, 'brando', 'Myrlene1983', 1, 'md12280923@gmail.com'),
(237, 'brando', 'Myrlene1983', 1, 'md12280923@gmail.com'),
(238, 'brando', 'Myrlene1983', 1, 'md12280923@gmail.com'),
(239, 'Jemuellonggakit', 'longgakitjemuel', 1, 'jemlonggakit@gmail.com'),
(240, 'Jemuellonggakit', 'longgakitjemuel', 1, 'jemlonggakit@gmail.com'),
(241, 'Jemuellonggakit', 'longgakitjemuel', 1, 'jemlonggakit@gmail.com'),
(242, 'Jemuellonggakit', 'longgakitjemuel', 1, 'jemlonggakit@gmail.com'),
(243, 'Jemuel Longgakit', 'jemuel18', 1, 'jemlonggakit@gmail.com'),
(244, 'Mauro Tagaan jr', 'tagaanjr', 1, 'Maurotagaanjr@gmail.com'),
(245, 'Vic', '1315', 1, 'thorvic@gmail.com'),
(246, 'Robertson', 'jekjen0906', 1, 'rv412496@gmail.com'),
(247, 'Jefftotoy10', 'jeffpogi', 1, 'belamide.jeffrey10@gmail.com'),
(248, 'HookxPress', 'kingvalera23', 1, 'valeraraphael23@gmail.com'),
(249, 'ALJHONTOTING', 'aljhon03', 1, 'aljhontoting2@gmail.com'),
(250, 'Brian Orbaña ', 'baby10', 1, 'brianorbana856@gmail.com'),
(251, 'Belmart resureccion', 'ndv_uStS424S7FF', 1, 'Belmart resureccion'),
(252, 'Belmart resureccion', 'ndv_uStS424S7FF', 1, 'barangay pandakaki tayabas city'),
(253, 'belmart resureccion ', 'ndv_uStS424S7FF', 1, 'barangay pandakaki tayabas city'),
(254, 'Radzmil Sasapan', '2023', 1, 'RadzmilSasapan@yahoo.com'),
(255, 'Ka-bali', 'Mahalko0824.', 1, 'alfredogarciafelixjr@gmail.com'),
(256, 'Ka-bali', 'mahalko0824.', 1, 'alfredfelix@gmail.con'),
(257, 'Ka-bali', 'mahalko0824.', 1, 'alfredfelix@gmail.con'),
(258, 'John1994', 'Johnprince1994', 1, 'ramsa199845@gmail.com'),
(259, 'John dimz', 'Johnprince1994', 1, 'ramsa199845@gmail.com'),
(260, 'jquimora', 'jords123454321', 1, 'jordanquimora3@gmail.com'),
(261, 'Biyok2911', 'biyok2911', 1, 'biyokdaw29@gmail.com'),
(262, 'Franz', '228001150079', 1, 'franzjaydentorres09@gmail.com'),
(263, 'CLARKING', 'Clark05', 1, 'clarkesurena8@gmail.com'),
(264, 'leofayo', 'arafayo18', 1, 'leoangelo.fayo@gmail.com'),
(265, 'Allin Cadiente', '09087352520', 1, 'allincadiente02@gmail.com'),
(266, 'Timothy Magante', 'magante123', 1, 'timothyjake00@gmail.com'),
(267, 'Leo', 'Legaspi102509', 1, 'leolegaspi068@gmail.com'),
(268, 'Jericholopez', 'akosijericho1968', 1, 'jericholopez344@gmail.com'),
(269, 'cedrickk', 'zedrickklntoc25', 1, 'cedrickkxx@gmail.com'),
(270, 'LocknLoad', 'isaacrainiergulapa1234567890', 1, 'gulapaisaac@gmail.com'),
(271, 'zhai', 'hularlanzel', 1, 'zhairis0429@gmail.com'),
(272, 'norvin123pogi', 'gman23678', 1, 'prinsipenorvin14@gmail.com'),
(273, 'Mr.Vin21', 'carpio2023', 1, 'carpioalvin272@gmail.com'),
(274, 'Mr.Vin21', 'carpio2023', 1, 'carpioalvin272@gmail.com'),
(275, 'JomarieGil', 'Apakagandamo', 1, 'gilhangjomarie8@gmail.com'),
(276, 'Janina Santos', 'beproud890', 1, 'janinasantos892@gmail.com'),
(277, 'Julssantiago', 'Santiago030', 1, 'albertjuls12@gmail.com'),
(278, 'Yukimbo_69', 'Miggyasawako', 1, 'id9308510@gmail.con'),
(279, 'Softnim1gs', 'yGgim08081203', 1, 'rosalmiggy24@gmail.com'),
(280, 'Jkenneth21 ', 'buboynocido21', 1, 'johnkennethnocido11@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `message` text NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_clubpage_configuration`
--
ALTER TABLE `tbl_clubpage_configuration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_clubs`
--
ALTER TABLE `tbl_clubs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_club_achievements`
--
ALTER TABLE `tbl_club_achievements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_club_members`
--
ALTER TABLE `tbl_club_members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_profile`
--
ALTER TABLE `tbl_profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_tanat`
--
ALTER TABLE `tbl_tanat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_tournament_registration`
--
ALTER TABLE `tbl_tournament_registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_clubpage_configuration`
--
ALTER TABLE `tbl_clubpage_configuration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_clubs`
--
ALTER TABLE `tbl_clubs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `tbl_club_achievements`
--
ALTER TABLE `tbl_club_achievements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_club_members`
--
ALTER TABLE `tbl_club_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=283;

--
-- AUTO_INCREMENT for table `tbl_profile`
--
ALTER TABLE `tbl_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=279;

--
-- AUTO_INCREMENT for table `tbl_tanat`
--
ALTER TABLE `tbl_tanat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_tournament_registration`
--
ALTER TABLE `tbl_tournament_registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=281;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14384;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
