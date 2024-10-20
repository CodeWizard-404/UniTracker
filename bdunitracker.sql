-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 19, 2024 at 02:08 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdunitracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `classe`
--

CREATE TABLE `classe` (
  `id_classe` int(11) NOT NULL,
  `annee_classe` int(11) NOT NULL,
  `nom_classe` varchar(255) DEFAULT NULL,
  `num_classe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classe`
--

INSERT INTO `classe` (`id_classe`, `annee_classe`, `nom_classe`, `num_classe`) VALUES
(1, 1, 'TI', 1),
(2, 1, 'TI', 2),
(3, 1, 'TI', 3),
(4, 1, 'TI', 4),
(5, 1, 'TI', 5),
(6, 1, 'TI', 6),
(7, 2, 'DSI', 1),
(8, 2, 'DSI', 2),
(9, 3, 'DSI', 1),
(10, 3, 'DSI', 2),
(11, 2, 'RSI', 1),
(12, 3, 'RSI', 1),
(13, 2, 'SEM', 1),
(14, 3, 'SEM', 1);

-- --------------------------------------------------------

--
-- Table structure for table `classe_matiere`
--

CREATE TABLE `classe_matiere` (
  `classe_id` int(11) NOT NULL,
  `matiere_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classe_matiere`
--

INSERT INTO `classe_matiere` (`classe_id`, `matiere_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(1, 17),
(1, 18),
(1, 19),
(1, 20),
(1, 21),
(1, 22),
(1, 23),
(7, 24),
(7, 25),
(7, 26),
(7, 27),
(7, 28),
(7, 29),
(7, 30),
(7, 31),
(7, 32),
(7, 33),
(7, 34),
(7, 35),
(7, 36),
(7, 37),
(7, 38),
(7, 39),
(7, 40),
(7, 41),
(7, 42),
(7, 43),
(7, 44),
(7, 45),
(7, 46),
(7, 47),
(7, 48),
(7, 49),
(7, 50),
(9, 51),
(9, 52),
(9, 53),
(9, 54),
(9, 55),
(9, 56),
(9, 57),
(9, 58),
(9, 59),
(9, 60),
(9, 61),
(9, 62),
(9, 63),
(9, 64),
(9, 65),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(2, 12),
(2, 13),
(2, 14),
(2, 15),
(2, 16),
(2, 17),
(2, 18),
(2, 19),
(2, 20),
(2, 21),
(2, 22),
(2, 23),
(8, 24),
(8, 25),
(8, 26),
(8, 27),
(8, 28),
(8, 29),
(8, 30),
(8, 31),
(8, 32),
(8, 33),
(8, 34),
(8, 35),
(8, 36),
(8, 37),
(8, 38),
(8, 39),
(8, 40),
(8, 41),
(8, 42),
(8, 43),
(8, 44),
(8, 45),
(8, 46),
(8, 47),
(8, 48),
(8, 49),
(8, 50),
(10, 51),
(10, 52),
(10, 53),
(10, 54),
(10, 55),
(10, 56),
(10, 57),
(10, 58),
(10, 59),
(10, 60),
(10, 61),
(10, 62),
(10, 63),
(10, 64),
(10, 65),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(3, 11),
(3, 12),
(3, 13),
(3, 14),
(3, 15),
(3, 16),
(3, 17),
(3, 18),
(3, 19),
(3, 20),
(3, 21),
(3, 22),
(3, 23),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(4, 8),
(4, 9),
(4, 10),
(4, 11),
(4, 12),
(4, 13),
(4, 14),
(4, 15),
(4, 16),
(4, 17),
(4, 18),
(4, 19),
(4, 20),
(4, 21),
(4, 22),
(4, 23),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5),
(5, 6),
(5, 7),
(5, 8),
(5, 9),
(5, 10),
(5, 11),
(5, 12),
(5, 13),
(5, 14),
(5, 15),
(5, 16),
(5, 17),
(5, 18),
(5, 19),
(5, 20),
(5, 21),
(5, 22),
(5, 23),
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(6, 5),
(6, 6),
(6, 7),
(6, 8),
(6, 9),
(6, 10),
(6, 11),
(6, 12),
(6, 13),
(6, 14),
(6, 15),
(6, 16),
(6, 17),
(6, 18),
(6, 19),
(6, 20),
(6, 21),
(6, 22),
(6, 23);

-- --------------------------------------------------------

--
-- Table structure for table `classe_seq`
--

CREATE TABLE `classe_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classe_seq`
--

INSERT INTO `classe_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `completion`
--

CREATE TABLE `completion` (
  `id_completion` int(11) NOT NULL,
  `complexite` tinyint(4) DEFAULT NULL,
  `marquer` bit(1) NOT NULL,
  `id_etd` int(11) DEFAULT NULL,
  `id_tache` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `completion_seq`
--

CREATE TABLE `completion_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `completion_seq`
--

INSERT INTO `completion_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `etudiant`
--

CREATE TABLE `etudiant` (
  `id_etudiant` int(11) NOT NULL,
  `adresse_etd` varchar(255) DEFAULT NULL,
  `cin_etd` varchar(255) DEFAULT NULL,
  `date_de_naissance_etd` date DEFAULT NULL,
  `email_etd` varchar(255) DEFAULT NULL,
  `mot_de_passe_etd` varchar(255) DEFAULT NULL,
  `nom_etd` varchar(255) DEFAULT NULL,
  `prenom_etd` varchar(255) DEFAULT NULL,
  `redoublant` bit(1) NOT NULL,
  `sexe_etd` varchar(255) DEFAULT NULL,
  `telephone_etd` varchar(255) DEFAULT NULL,
  `id_classe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `etudiant`
--

INSERT INTO `etudiant` (`id_etudiant`, `adresse_etd`, `cin_etd`, `date_de_naissance_etd`, `email_etd`, `mot_de_passe_etd`, `nom_etd`, `prenom_etd`, `redoublant`, `sexe_etd`, `telephone_etd`, `id_classe`) VALUES
(1, NULL, NULL, NULL, 'std1@gmail.com', 'Password1', 'std1', 'student1', b'0', NULL, NULL, 1),
(2, NULL, NULL, NULL, 'std2@gmail.com', 'Password2', 'std2', 'student2', b'0', NULL, NULL, 2),
(3, NULL, NULL, NULL, 'std3@gmail.com', 'Password3', 'std3', 'student3', b'0', NULL, NULL, 3),
(4, NULL, NULL, NULL, 'std4@gmail.com', 'Password4', 'std4', 'student4', b'0', NULL, NULL, 4),
(5, NULL, NULL, NULL, 'std5@gmail.com', 'Password5', 'std5', 'student5', b'0', NULL, NULL, 5),
(6, NULL, NULL, NULL, 'std6@gmail.com', 'Password6', 'std6', 'student6', b'0', NULL, NULL, 6),
(7, NULL, NULL, NULL, 'std7@gmail.com', 'Password7', 'std7', 'student7', b'0', NULL, NULL, 7),
(8, NULL, NULL, NULL, 'std8@gmail.com', 'Password8', 'std8', 'student8', b'0', NULL, NULL, 8),
(9, NULL, NULL, NULL, 'std9@gmail.com', 'Password9', 'std9', 'student9', b'0', NULL, NULL, 9),
(10, NULL, NULL, NULL, 'std10@gmail.com', 'Password10', 'std10', 'student10', b'0', NULL, NULL, 10),
(11, NULL, NULL, NULL, 'std11@gmail.com', 'Password11', 'std11', 'student11', b'0', NULL, NULL, 11),
(12, NULL, NULL, NULL, 'std12@gmail.com', 'Password12', 'std12', 'student12', b'0', NULL, NULL, 12),
(13, NULL, NULL, NULL, 'std13@gmail.com', 'Password13', 'std13', 'student13', b'0', NULL, NULL, 13),
(14, NULL, NULL, NULL, 'std14@gmail.com', 'Password14', 'std14', 'student14', b'0', NULL, NULL, 14),
(15, NULL, NULL, NULL, 'std15@gmail.com', 'Password15', 'std15', 'student15', b'0', NULL, NULL, 1),
(16, NULL, NULL, NULL, 'std16@gmail.com', 'Password16', 'std16', 'student16', b'0', NULL, NULL, 2),
(17, NULL, NULL, NULL, 'std17@gmail.com', 'Password17', 'std17', 'student17', b'0', NULL, NULL, 3),
(18, NULL, NULL, NULL, 'std18@gmail.com', 'Password18', 'std18', 'student18', b'0', NULL, NULL, 4),
(19, NULL, NULL, NULL, 'std19@gmail.com', 'Password19', 'std19', 'student19', b'0', NULL, NULL, 5),
(20, NULL, NULL, NULL, 'std20@gmail.com', 'Password20', 'std20', 'student20', b'0', NULL, NULL, 6),
(21, NULL, NULL, NULL, 'std21@gmail.com', 'Password21', 'std21', 'student21', b'0', NULL, NULL, 7),
(22, NULL, NULL, NULL, 'std22@gmail.com', 'Password22', 'std22', 'student22', b'0', NULL, NULL, 8),
(23, NULL, NULL, NULL, 'std23@gmail.com', 'Password23', 'std23', 'student23', b'0', NULL, NULL, 9),
(24, NULL, NULL, NULL, 'std24@gmail.com', 'Password24', 'std24', 'student24', b'0', NULL, NULL, 10),
(25, NULL, NULL, NULL, 'std25@gmail.com', 'Password25', 'std25', 'student25', b'0', NULL, NULL, 11),
(26, NULL, NULL, NULL, 'std26@gmail.com', 'Password26', 'std26', 'student26', b'0', NULL, NULL, 12),
(27, NULL, NULL, NULL, 'std27@gmail.com', 'Password27', 'std27', 'student27', b'0', NULL, NULL, 13),
(28, NULL, NULL, NULL, 'std28@gmail.com', 'Password28', 'std28', 'student28', b'0', NULL, NULL, 14),
(29, NULL, NULL, NULL, 'std29@gmail.com', 'Password29', 'std29', 'student29', b'0', NULL, NULL, 1),
(30, NULL, NULL, NULL, 'std30@gmail.com', 'Password30', 'std30', 'student30', b'0', NULL, NULL, 2),
(31, NULL, NULL, NULL, 'std31@gmail.com', 'Password31', 'std31', 'student31', b'0', NULL, NULL, 3),
(32, NULL, NULL, NULL, 'std32@gmail.com', 'Password32', 'std32', 'student32', b'0', NULL, NULL, 4),
(33, NULL, NULL, NULL, 'std33@gmail.com', 'Password33', 'std33', 'student33', b'0', NULL, NULL, 5),
(34, NULL, NULL, NULL, 'std34@gmail.com', 'Password34', 'std34', 'student34', b'0', NULL, NULL, 6),
(35, NULL, NULL, NULL, 'std35@gmail.com', 'Password35', 'std35', 'student35', b'0', NULL, NULL, 7),
(36, NULL, NULL, NULL, 'std36@gmail.com', 'Password36', 'std36', 'student36', b'0', NULL, NULL, 8),
(37, NULL, NULL, NULL, 'std37@gmail.com', 'Password37', 'std37', 'student37', b'0', NULL, NULL, 9),
(38, NULL, NULL, NULL, 'std38@gmail.com', 'Password38', 'std38', 'student38', b'0', NULL, NULL, 10),
(39, NULL, NULL, NULL, 'std39@gmail.com', 'Password39', 'std39', 'student39', b'0', NULL, NULL, 11),
(40, NULL, NULL, NULL, 'std40@gmail.com', 'Password40', 'std40', 'student40', b'0', NULL, NULL, 12),
(41, NULL, NULL, NULL, 'std41@gmail.com', 'Password41', 'std41', 'student41', b'0', NULL, NULL, 13),
(42, NULL, NULL, NULL, 'std42@gmail.com', 'Password42', 'std42', 'student42', b'0', NULL, NULL, 14),
(43, NULL, NULL, NULL, 'std43@gmail.com', 'Password43', 'std43', 'student43', b'0', NULL, NULL, 1),
(44, NULL, NULL, NULL, 'std44@gmail.com', 'Password44', 'std44', 'student44', b'0', NULL, NULL, 2),
(45, NULL, NULL, NULL, 'std45@gmail.com', 'Password45', 'std45', 'student45', b'0', NULL, NULL, 3),
(46, NULL, NULL, NULL, 'std46@gmail.com', 'Password46', 'std46', 'student46', b'0', NULL, NULL, 4),
(47, NULL, NULL, NULL, 'std47@gmail.com', 'Password47', 'std47', 'student47', b'0', NULL, NULL, 5),
(48, NULL, NULL, NULL, 'std48@gmail.com', 'Password48', 'std48', 'student48', b'0', NULL, NULL, 6),
(49, NULL, NULL, NULL, 'std49@gmail.com', 'Password49', 'std49', 'student49', b'0', NULL, NULL, 7),
(50, NULL, NULL, NULL, 'std50@gmail.com', 'Password50', 'std50', 'student50', b'0', NULL, NULL, 8),
(51, NULL, NULL, NULL, 'std51@gmail.com', 'Password51', 'std51', 'student51', b'0', NULL, NULL, 9),
(52, NULL, NULL, NULL, 'std52@gmail.com', 'Password52', 'std52', 'student52', b'0', NULL, NULL, 10),
(53, NULL, NULL, NULL, 'std53@gmail.com', 'Password53', 'std53', 'student53', b'0', NULL, NULL, 11),
(54, NULL, NULL, NULL, 'std54@gmail.com', 'Password54', 'std54', 'student54', b'0', NULL, NULL, 12),
(55, NULL, NULL, NULL, 'std55@gmail.com', 'Password55', 'std55', 'student55', b'0', NULL, NULL, 13),
(56, NULL, NULL, NULL, 'std56@gmail.com', 'Password56', 'std56', 'student56', b'0', NULL, NULL, 14),
(57, NULL, NULL, NULL, 'std57@gmail.com', 'Password57', 'std57', 'student57', b'0', NULL, NULL, 1),
(58, NULL, NULL, NULL, 'std58@gmail.com', 'Password58', 'std58', 'student58', b'0', NULL, NULL, 2),
(59, NULL, NULL, NULL, 'std59@gmail.com', 'Password59', 'std59', 'student59', b'0', NULL, NULL, 3),
(60, NULL, NULL, NULL, 'std60@gmail.com', 'Password60', 'std60', 'student60', b'0', NULL, NULL, 4),
(61, NULL, NULL, NULL, 'std61@gmail.com', 'Password61', 'std61', 'student61', b'0', NULL, NULL, 5),
(62, NULL, NULL, NULL, 'std62@gmail.com', 'Password62', 'std62', 'student62', b'0', NULL, NULL, 6),
(63, NULL, NULL, NULL, 'std63@gmail.com', 'Password63', 'std63', 'student63', b'0', NULL, NULL, 7),
(64, NULL, NULL, NULL, 'std64@gmail.com', 'Password64', 'std64', 'student64', b'0', NULL, NULL, 8),
(65, NULL, NULL, NULL, 'std65@gmail.com', 'Password65', 'std65', 'student65', b'0', NULL, NULL, 9),
(66, NULL, NULL, NULL, 'std66@gmail.com', 'Password66', 'std66', 'student66', b'0', NULL, NULL, 10),
(67, NULL, NULL, NULL, 'std67@gmail.com', 'Password67', 'std67', 'student67', b'0', NULL, NULL, 11),
(68, NULL, NULL, NULL, 'std68@gmail.com', 'Password68', 'std68', 'student68', b'0', NULL, NULL, 12),
(69, NULL, NULL, NULL, 'std69@gmail.com', 'Password69', 'std69', 'student69', b'0', NULL, NULL, 13),
(70, NULL, NULL, NULL, 'std70@gmail.com', 'Password70', 'std70', 'student70', b'0', NULL, NULL, 14),
(71, NULL, NULL, NULL, 'std71@gmail.com', 'Password71', 'std71', 'student71', b'0', NULL, NULL, 1),
(72, NULL, NULL, NULL, 'std72@gmail.com', 'Password72', 'std72', 'student72', b'0', NULL, NULL, 2),
(73, NULL, NULL, NULL, 'std73@gmail.com', 'Password73', 'std73', 'student73', b'0', NULL, NULL, 3),
(74, NULL, NULL, NULL, 'std74@gmail.com', 'Password74', 'std74', 'student74', b'0', NULL, NULL, 4),
(75, NULL, NULL, NULL, 'std75@gmail.com', 'Password75', 'std75', 'student75', b'0', NULL, NULL, 5),
(76, NULL, NULL, NULL, 'std76@gmail.com', 'Password76', 'std76', 'student76', b'0', NULL, NULL, 6),
(77, NULL, NULL, NULL, 'std77@gmail.com', 'Password77', 'std77', 'student77', b'0', NULL, NULL, 7),
(78, NULL, NULL, NULL, 'std78@gmail.com', 'Password78', 'std78', 'student78', b'0', NULL, NULL, 8),
(79, NULL, NULL, NULL, 'std79@gmail.com', 'Password79', 'std79', 'student79', b'0', NULL, NULL, 9),
(80, NULL, NULL, NULL, 'std80@gmail.com', 'Password80', 'std80', 'student80', b'0', NULL, NULL, 10),
(81, NULL, NULL, NULL, 'std81@gmail.com', 'Password81', 'std81', 'student81', b'0', NULL, NULL, 11),
(82, NULL, NULL, NULL, 'std82@gmail.com', 'Password82', 'std82', 'student82', b'0', NULL, NULL, 12),
(83, NULL, NULL, NULL, 'std83@gmail.com', 'Password83', 'std83', 'student83', b'0', NULL, NULL, 13),
(84, NULL, NULL, NULL, 'std84@gmail.com', 'Password84', 'std84', 'student84', b'0', NULL, NULL, 14),
(85, NULL, NULL, NULL, 'std85@gmail.com', 'Password85', 'std85', 'student85', b'0', NULL, NULL, 1),
(86, NULL, NULL, NULL, 'std86@gmail.com', 'Password86', 'std86', 'student86', b'0', NULL, NULL, 2),
(87, NULL, NULL, NULL, 'std87@gmail.com', 'Password87', 'std87', 'student87', b'0', NULL, NULL, 3),
(88, NULL, NULL, NULL, 'std88@gmail.com', 'Password88', 'std88', 'student88', b'0', NULL, NULL, 4),
(89, NULL, NULL, NULL, 'std89@gmail.com', 'Password89', 'std89', 'student89', b'0', NULL, NULL, 5),
(90, NULL, NULL, NULL, 'std90@gmail.com', 'Password90', 'std90', 'student90', b'0', NULL, NULL, 6),
(91, NULL, NULL, NULL, 'std91@gmail.com', 'Password91', 'std91', 'student91', b'0', NULL, NULL, 7),
(92, NULL, NULL, NULL, 'std92@gmail.com', 'Password92', 'std92', 'student92', b'0', NULL, NULL, 8),
(93, NULL, NULL, NULL, 'std93@gmail.com', 'Password93', 'std93', 'student93', b'0', NULL, NULL, 9),
(94, NULL, NULL, NULL, 'std94@gmail.com', 'Password94', 'std94', 'student94', b'0', NULL, NULL, 10),
(95, NULL, NULL, NULL, 'std95@gmail.com', 'Password95', 'std95', 'student95', b'0', NULL, NULL, 11),
(96, NULL, NULL, NULL, 'std96@gmail.com', 'Password96', 'std96', 'student96', b'0', NULL, NULL, 12),
(97, NULL, NULL, NULL, 'std97@gmail.com', 'Password97', 'std97', 'student97', b'0', NULL, NULL, 13),
(98, NULL, NULL, NULL, 'std98@gmail.com', 'Password98', 'std98', 'student98', b'0', NULL, NULL, 14),
(99, NULL, NULL, NULL, 'std99@gmail.com', 'Password99', 'std99', 'student99', b'0', NULL, NULL, 1),
(100, NULL, NULL, NULL, 'std100@gmail.com', 'Password100', 'std100', 'student100', b'0', NULL, NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `etudiant_seq`
--

CREATE TABLE `etudiant_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `etudiant_seq`
--

INSERT INTO `etudiant_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `groupe`
--

CREATE TABLE `groupe` (
  `id_groupe` int(11) NOT NULL,
  `libelle_groupe` varchar(255) DEFAULT NULL,
  `matiere_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `groupe_creation`
--

CREATE TABLE `groupe_creation` (
  `etudiant_id` int(11) NOT NULL,
  `groupe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `groupe_seq`
--

CREATE TABLE `groupe_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `groupe_seq`
--

INSERT INTO `groupe_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `matiere`
--

CREATE TABLE `matiere` (
  `id_matiere` int(11) NOT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `semestre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `matiere`
--

INSERT INTO `matiere` (`id_matiere`, `libelle`, `semestre`) VALUES
(1, 'Systèmes Logiques', '1'),
(2, 'Architecture des ordinateurs', '1'),
(3, 'Atelier Systèmes Logiques', '1'),
(4, 'Atelier Développement web et multimédia I', '1'),
(5, 'Développement web et multimédia I', '1'),
(6, 'Atelier Programmation', '1'),
(7, 'Algorithmique et programmation I', '1'),
(8, 'Atelier mathématiques appliquées', '1'),
(9, 'Mathématiques Appliquées', '1'),
(10, 'Certificat en compétence Numérique', '1'),
(11, 'Business culture', '1'),
(12, 'English for computing I', '1'),
(13, 'Technique d\'expression I', '1'),
(14, 'Introduction au Droit Informatique', '1'),
(15, 'Séminaires informatiques', '1'),
(16, 'Atelier systèmes I', '2'),
(17, 'Fondements des Réseaux', '2'),
(18, 'Systèmes d\'exploitation', '2'),
(19, 'Atelier Développement web et Multimédia II', '2'),
(20, 'Développement web et Multimédia II', '2'),
(21, 'Atelier programmation II', '2'),
(22, 'Algorithmique et programmation II', '2'),
(23, 'Statistiques et Probabilités', '2'),
(24, 'Recherche opérationelle', '1'),
(25, 'Préparation aux métiers', '1'),
(26, 'Techniques d\'expression II', '1'),
(27, 'English for computing II', '1'),
(28, 'Mini-Projet', '1'),
(29, 'TP_linux', '1'),
(30, 'Atelier programmation Objet (JAVA)', '1'),
(31, 'Programmation Objet (JAVA)', '1'),
(32, 'Modélisation Objet UML 2', '1'),
(33, 'Atelier Framework coté client (Angular)', '1'),
(34, 'Atelier Développement coté serveur (PHP)', '1'),
(35, 'Atelier Base de Données (SQL)', '1'),
(36, 'Bases de Données', '1'),
(37, 'Communication en entreprise', '1'),
(38, 'High tech english', '1'),
(39, 'Droit de l\'information et propriétés intellectuelles', '1'),
(40, 'Introduction IoT', '1'),
(41, 'Atelier Développement web avancé (CSS)', '1'),
(42, 'Programmation Objet Avancée (JAVA)', '2'),
(43, 'Atelier Programmation Objet Avancée (JAVA)', '2'),
(44, 'Projet d\'intégration', '2'),
(45, 'Atelier framework coté serveur (Symfony)', '2'),
(46, 'Atelier Environnement de Développement (SpringBoot)', '2'),
(47, 'Architecture logicielle', '2'),
(48, 'Atelier SGBD (SQL)', '2'),
(49, 'SGBD (SQL)', '2'),
(50, 'Préparation à la certification en français', '2'),
(51, 'Etude et management de projets innovants', '2'),
(52, 'Business english', '2'),
(53, 'Langage Python', '2'),
(54, 'Atelier Langage Python', '2'),
(55, 'Développement Mobile', '1'),
(56, 'Atelier Développement Mobile', '1'),
(57, 'Atelier Framework cross-platform (flutter)', '1'),
(58, 'SOA', '1'),
(59, 'Atelier SOA', '1'),
(60, 'Gestion des données Massives', '1'),
(61, 'Atelier Base de données Avancée', '1'),
(62, 'Méthodologie de conception Objet', '1'),
(63, 'Projet d\'integration', '1'),
(64, 'Preparing TOEIC', '1'),
(65, 'Technique de recherche d\'emploi et marketing de soi', '1');

-- --------------------------------------------------------

--
-- Table structure for table `matiere_professeur`
--

CREATE TABLE `matiere_professeur` (
  `matiere_id` int(11) NOT NULL,
  `professeur_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `matiere_professeur`
--

INSERT INTO `matiere_professeur` (`matiere_id`, `professeur_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 2),
(6, 2),
(7, 3),
(8, 3),
(9, 4),
(10, 4),
(11, 5),
(12, 5),
(13, 6),
(14, 6),
(15, 7),
(16, 7),
(17, 8),
(18, 8),
(19, 9),
(20, 9),
(21, 10),
(22, 10),
(23, 11),
(24, 11),
(25, 12),
(26, 12),
(27, 13),
(28, 13),
(29, 14),
(30, 14),
(31, 15),
(32, 15),
(33, 16),
(34, 16),
(35, 17),
(36, 17),
(37, 18),
(38, 18),
(39, 1),
(40, 2),
(41, 3),
(42, 4),
(43, 5),
(44, 6),
(45, 7),
(46, 8),
(47, 9),
(48, 10),
(49, 11),
(50, 12),
(51, 13),
(52, 14),
(53, 15),
(54, 16),
(55, 17),
(56, 18),
(57, 1),
(58, 2),
(59, 3),
(60, 4),
(61, 5),
(62, 6),
(63, 7),
(64, 8),
(65, 9);

-- --------------------------------------------------------

--
-- Table structure for table `matiere_seq`
--

CREATE TABLE `matiere_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `matiere_seq`
--

INSERT INTO `matiere_seq` (`next_val`) VALUES
(51);

-- --------------------------------------------------------

--
-- Table structure for table `professeur`
--

CREATE TABLE `professeur` (
  `id_professeur` int(11) NOT NULL,
  `cin_prof` varchar(255) DEFAULT NULL,
  `email_prof` varchar(255) DEFAULT NULL,
  `mot_de_passe_prof` varchar(255) DEFAULT NULL,
  `nom_prof` varchar(255) DEFAULT NULL,
  `prenom_prof` varchar(255) DEFAULT NULL,
  `sexe_prof` varchar(255) DEFAULT NULL,
  `telephone_prof` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `professeur`
--

INSERT INTO `professeur` (`id_professeur`, `cin_prof`, `email_prof`, `mot_de_passe_prof`, `nom_prof`, `prenom_prof`, `sexe_prof`, `telephone_prof`) VALUES
(1, NULL, 'prof1@gmail.com', 'PasswordProf1', 'Prof1', 'Professor1', NULL, NULL),
(2, NULL, 'prof2@gmail.com', 'PasswordProf2', 'Prof2', 'Professor2', NULL, NULL),
(3, NULL, 'prof3@gmail.com', 'PasswordProf3', 'Prof3', 'Professor3', NULL, NULL),
(4, NULL, 'prof4@gmail.com', 'PasswordProf4', 'Prof4', 'Professor4', NULL, NULL),
(5, NULL, 'prof5@gmail.com', 'PasswordProf5', 'Prof5', 'Professor5', NULL, NULL),
(6, NULL, 'prof6@gmail.com', 'PasswordProf6', 'Prof6', 'Professor6', NULL, NULL),
(7, NULL, 'prof7@gmail.com', 'PasswordProf7', 'Prof7', 'Professor7', NULL, NULL),
(8, NULL, 'prof8@gmail.com', 'PasswordProf8', 'Prof8', 'Professor8', NULL, NULL),
(9, NULL, 'prof9@gmail.com', 'PasswordProf9', 'Prof9', 'Professor9', NULL, NULL),
(10, NULL, 'prof10@gmail.com', 'PasswordProf10', 'Prof10', 'Professor10', NULL, NULL),
(11, NULL, 'prof11@gmail.com', 'PasswordProf11', 'Prof11', 'Professor11', NULL, NULL),
(12, NULL, 'prof12@gmail.com', 'PasswordProf12', 'Prof12', 'Professor12', NULL, NULL),
(13, NULL, 'prof13@gmail.com', 'PasswordProf13', 'Prof13', 'Professor13', NULL, NULL),
(14, NULL, 'prof14@gmail.com', 'PasswordProf14', 'Prof14', 'Professor14', NULL, NULL),
(15, NULL, 'prof15@gmail.com', 'PasswordProf15', 'Prof15', 'Professor15', NULL, NULL),
(16, NULL, 'prof16@gmail.com', 'PasswordProf16', 'Prof16', 'Professor16', NULL, NULL),
(17, NULL, 'prof17@gmail.com', 'PasswordProf17', 'Prof17', 'Professor17', NULL, NULL),
(18, NULL, 'prof18@gmail.com', 'PasswordProf18', 'Prof18', 'Professor18', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `professeur_seq`
--

CREATE TABLE `professeur_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `professeur_seq`
--

INSERT INTO `professeur_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `realisation`
--

CREATE TABLE `realisation` (
  `tache_id` int(11) NOT NULL,
  `etudiant_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tache`
--

CREATE TABLE `tache` (
  `id_tache` int(11) NOT NULL,
  `date_limite` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `id_matiere` int(11) DEFAULT NULL,
  `id_professeur` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tache_seq`
--

CREATE TABLE `tache_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tache_seq`
--

INSERT INTO `tache_seq` (`next_val`) VALUES
(1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classe`
--
ALTER TABLE `classe`
  ADD PRIMARY KEY (`id_classe`);

--
-- Indexes for table `classe_matiere`
--
ALTER TABLE `classe_matiere`
  ADD KEY `FK3ho3r4plabnrgh1xljm72mvrs` (`matiere_id`),
  ADD KEY `FKijulrqpniueqr2ij3ou25v9r9` (`classe_id`);

--
-- Indexes for table `completion`
--
ALTER TABLE `completion`
  ADD PRIMARY KEY (`id_completion`),
  ADD KEY `FKhq20mur3r4xumjpwimsa6d90g` (`id_etd`),
  ADD KEY `FK6w054aboe1id7qbl4eh09u3pa` (`id_tache`);

--
-- Indexes for table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`id_etudiant`),
  ADD KEY `FKcm9x8f9tb6g3jbip4afl7rqi2` (`id_classe`);

--
-- Indexes for table `groupe`
--
ALTER TABLE `groupe`
  ADD PRIMARY KEY (`id_groupe`),
  ADD KEY `FKyhq0jxvbltf0fkqnaqgfhr1r` (`matiere_id`);

--
-- Indexes for table `groupe_creation`
--
ALTER TABLE `groupe_creation`
  ADD KEY `FKp43t0al0djfvqav6oyjkr2g6l` (`groupe_id`),
  ADD KEY `FKsmm55qw466dhipl6pbou9c7ob` (`etudiant_id`);

--
-- Indexes for table `matiere`
--
ALTER TABLE `matiere`
  ADD PRIMARY KEY (`id_matiere`);

--
-- Indexes for table `matiere_professeur`
--
ALTER TABLE `matiere_professeur`
  ADD KEY `FK2w4conap5k5i8qk287jeyppig` (`professeur_id`),
  ADD KEY `FKg0fifer7vqj7uhq1y9276g2og` (`matiere_id`);

--
-- Indexes for table `professeur`
--
ALTER TABLE `professeur`
  ADD PRIMARY KEY (`id_professeur`);

--
-- Indexes for table `realisation`
--
ALTER TABLE `realisation`
  ADD KEY `FK8ix8chiyo51bfofl5yc77d9sa` (`etudiant_id`),
  ADD KEY `FK8smc3cn845ttjrfdxetqwasrr` (`tache_id`);

--
-- Indexes for table `tache`
--
ALTER TABLE `tache`
  ADD PRIMARY KEY (`id_tache`),
  ADD KEY `FK625giksxs2olt4ts644os4r2e` (`id_matiere`),
  ADD KEY `FK3iq33s4xkunh5wdhu0w9jbg21` (`id_professeur`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `classe`
--
ALTER TABLE `classe`
  MODIFY `id_classe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `completion`
--
ALTER TABLE `completion`
  MODIFY `id_completion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `etudiant`
--
ALTER TABLE `etudiant`
  MODIFY `id_etudiant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `groupe`
--
ALTER TABLE `groupe`
  MODIFY `id_groupe` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `matiere`
--
ALTER TABLE `matiere`
  MODIFY `id_matiere` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `professeur`
--
ALTER TABLE `professeur`
  MODIFY `id_professeur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tache`
--
ALTER TABLE `tache`
  MODIFY `id_tache` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `classe_matiere`
--
ALTER TABLE `classe_matiere`
  ADD CONSTRAINT `FK3ho3r4plabnrgh1xljm72mvrs` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id_matiere`),
  ADD CONSTRAINT `FKijulrqpniueqr2ij3ou25v9r9` FOREIGN KEY (`classe_id`) REFERENCES `classe` (`id_classe`);

--
-- Constraints for table `completion`
--
ALTER TABLE `completion`
  ADD CONSTRAINT `FK6w054aboe1id7qbl4eh09u3pa` FOREIGN KEY (`id_tache`) REFERENCES `tache` (`id_tache`),
  ADD CONSTRAINT `FKhq20mur3r4xumjpwimsa6d90g` FOREIGN KEY (`id_etd`) REFERENCES `etudiant` (`id_etudiant`);

--
-- Constraints for table `etudiant`
--
ALTER TABLE `etudiant`
  ADD CONSTRAINT `FKcm9x8f9tb6g3jbip4afl7rqi2` FOREIGN KEY (`id_classe`) REFERENCES `classe` (`id_classe`);

--
-- Constraints for table `groupe`
--
ALTER TABLE `groupe`
  ADD CONSTRAINT `FKyhq0jxvbltf0fkqnaqgfhr1r` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id_matiere`);

--
-- Constraints for table `groupe_creation`
--
ALTER TABLE `groupe_creation`
  ADD CONSTRAINT `FKp43t0al0djfvqav6oyjkr2g6l` FOREIGN KEY (`groupe_id`) REFERENCES `groupe` (`id_groupe`),
  ADD CONSTRAINT `FKsmm55qw466dhipl6pbou9c7ob` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id_etudiant`);

--
-- Constraints for table `matiere_professeur`
--
ALTER TABLE `matiere_professeur`
  ADD CONSTRAINT `FK2w4conap5k5i8qk287jeyppig` FOREIGN KEY (`professeur_id`) REFERENCES `professeur` (`id_professeur`),
  ADD CONSTRAINT `FKg0fifer7vqj7uhq1y9276g2og` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id_matiere`);

--
-- Constraints for table `realisation`
--
ALTER TABLE `realisation`
  ADD CONSTRAINT `FK8ix8chiyo51bfofl5yc77d9sa` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id_etudiant`),
  ADD CONSTRAINT `FK8smc3cn845ttjrfdxetqwasrr` FOREIGN KEY (`tache_id`) REFERENCES `tache` (`id_tache`);

--
-- Constraints for table `tache`
--
ALTER TABLE `tache`
  ADD CONSTRAINT `FK3iq33s4xkunh5wdhu0w9jbg21` FOREIGN KEY (`id_professeur`) REFERENCES `professeur` (`id_professeur`),
  ADD CONSTRAINT `FK625giksxs2olt4ts644os4r2e` FOREIGN KEY (`id_matiere`) REFERENCES `matiere` (`id_matiere`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
