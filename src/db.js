import BowPose from './components/images/Bow Pose.png';
import Cobra from './components/images/Cobra.png';
import Crow from './components/images/Crow.png';
import Fish from './components/images/Fish.png';
import HeadStand from './components/images/Head Stand.png';
import PlowPose from './components/images/Plow Pose.png';
import ShoulderStand from './components/images/Shoulder Stand.png';
import TrianglePose from './components/images/Triangle Pose.png';

export const db = [
	{
		id: 0,
		image: Cobra,
		alt: 'Cobra',
		name: 'Cobra',
		sanscritName: 'भुजङ्गासन bhujaṅgāsana',
		about: 'Kobra oder auch Sphinx, ahmt die aufgerichtete Haltung einer Schlange nach. Bei dieser Yoga-Übung liegen deine Beine und deine Hüfte (in der Regel) auf dem Boden, während dein Oberkörper aufgerichtet ist.',
		wirkung: [
			{
				wirkung: 'körperlich',
				text: 'Die Rückenmuskeln werden massiert und gestärkt. Der Druck, der auf den Bauch ausgeübt wird, wirkt gegen Verstopfung. Diese Asana ist auch gut gegen die verschiedenen Krankheiten der weiblichen Geschlechtsorgane.Gedehnte Muskeln: Pectoralis (Brustmuskeln), Rectus Abdomini (Gerade Bauchmuskeln), Halsmuskeln, eventuell Psoas (Hüftbeuger).Gestärkte Muskeln: Longissimus (Rückenstrecker), Trapezius (Kapuzenmuskel), eventuell Latissimus (breite Rückenmuskeln), Gluteus (Gesäßmuskeln), Trizeps (Armstrecker) ',
			},
			{
				wirkung: 'energetisch',
				text: 'Die Kobra aktiviert und energetisiert. Energie fließt sowohl vorne als auch in der Wirbelsäule hoch. Angesprochen werden besonders Anahata, Vishuddha und Ajna Chakra.',
			},
			{
				wirkung: 'geistig',
				text: 'Die Kobra öffnet und befreit. Gibt Mut zu hohen Idealen. Befreit von Furcht und gibt neues Selbstbewusstsein.',
			},
		],
	},
	{
		id: 1,
		image: ShoulderStand,
		alt: 'SchulterStand',
		name: 'Schulterstand',
		sanscritName: 'सर्वाङ्गासन sarvāṅgāsana',
		about: 'Ausgehend von der Rückenentspannungslage bringst du die Beine zusammen, die Arme liegen neben dem Körper mit den Handinnenflächen nach unten. Mit der Einatmung hebst du beide Beine soweit wie möglich in eine senkrechte Position nach oben. Den Rücken unterstützt du mit den Händen.',
		wirkung: [
			{
				wirkung: 'körperlich',
				text: 'Der Schulterstand hilft, die Funktion der Schilddrüse zu normalisieren und unterstützt dadurch den Metabolismus im ganzen Körper. Sarvangasana ist gut gegen Magenverstimmung und Krampfadern. Die Wirbelsäule wird und bleibt flexibel. Nackenverspannungen können aufgelöst werden.Gedehnte Muskeln: Longissimus (Rückenstrecker), Trapezius (Kapuzenmuskel), Nackenmuskeln',
			},
			{
				wirkung: 'energetisch',
				text: 'Der Schulterstand regeneriert das Prana. Er gilt wie der Kopfstand als Verjüngungsübung und kann auch nach einem anstrengenden Arbeitstag geübt werden, um zu neuer Energie zu kommen. Angesprochen wird besonders das Vishuddha Chakra.',
			},
			{
				wirkung: 'geistig',
				text: 'Der Schulterstand vermittelt ein Gefühl der Ganzheit. Sarvangasana heißt wörtlich "Stellung aller Teile". Sie hilft dir, dein Leben zu akzeptieren und liebevoll anzunehmen. ',
			},
		],
	},
	{
		id: 2,
		image: Fish,
		alt: 'Fisch',
		name: 'Fisch',
		sanscritName: 'मत्स्यासन matsyāsana',
		about: 'Dein Kinn ist auf dein Brustbein geneigt, während du dich mit Armkraft und einer Einatmung in eine Rückbeuge stemmst. Dein Gewicht lastet nun auf den Unterarmen. zuletzt lässt du deinen Kopf mit einer Ausatmung sanft in den Nacken sinken.',
		wirkung: [
			{
				wirkung: 'körperlich',
				text: 'Matsyasana harmonisiert dieSchilddrüse. Matsyasana schafft Abhilfe bei verspannten Schulter- und Rückenmuskeln, die eventuell im oder nach Sarvangasana fühlbar geworden sind. Matsyasana erhöht die Lebenskraft und beseitigt Steifheit im Lenden- und Halswirbelbereich. Matsyasana stärkt die obere Rückenmuskulatur und hilft gegen Rundrücken. Emotionelle Spannungen, die sich oft um Herz und Solarplexus legen, werden abgebaut.Gedehnte Muskeln sind Brustmuskel und Halsmuskel.Gestärkte Muskeln wären Trapezius,Longissimus,Latissimus,Bizeps',
			},
			{
				wirkung: 'energetisch',
				text: 'Der Fisch wirkt Herz öffnent sowie stark aktivirend und erhöht auch die Lebenskraft.Besonders angesprochene Chakras sind Anahata und Vishuddha Chakra',
			},
			{
				wirkung: 'geistig',
				text: 'Matsyasana hilft, das Herz zu öffnen und emotionale Spannungen zu lösen, die sich oft auf Sonnengeflecht und Herz legen. Matsyasana gibt ein Gefühl der Freiheit, der Offenheit und der Freude.',
			},
		],
	},
	{
		id: 3,
		image: PlowPose,
		alt: 'Pflug',
		name: 'Pflug',
		sanscritName: 'हलासन halāsana',
		about: 'Dein Kinn ist auf dein Brustbein geneigt, während du dich mit Armkraft und einer Einatmung in eine Rückbeuge stemmst. Dein Gewicht lastet nun auf den Unterarmen. zuletzt lässt du deinen Kopf mit einer Ausatmung sanft in den Nacken sinken.',
		wirkung: [
			{
				wirkung: 'körperlich',
				text: 'In Halasana werden alle inneren Organe durch das Zwerchfell massiert, verjüngt und in ihrer Funktion verbessert und belebt, wie die Milz, Nebennieren, Bauchspeicheldrüse, wodurch die Insulinproduktion angeregt wird, die Verdauungsorgane, wodurch die Verdauung angeregt wird, Aufstoßen und Verstopfung wird gelindert, die Schilddrüsenfunktion wird normalisiert, wodurch sich der Körpermetabolismus harmonisiert und das Immunsystem angeregt wird.',
			},
			{
				wirkung: 'energetisch',
				text: 'Halasana wirkt harmonisierend und ausgleichend.Besonders angesprochen werden Vishuddha und Anahata Chakra.',
			},
			{
				wirkung: 'geistig',
				text: 'Halasana hilft, zur inneren Mitte zu kommen. Halasana gibt die Kraft, langfristige Veränderungen einzuleiten (“sein Feld zu bestellen”) und geduldig die Wirkungen abzuwarten. Wenn du unter Schlaflosigkeit leidest, wird die regelmäßige Praxis von Halasana dir helfen, deine schlaflosen Phasen zu mindern. Wahrscheinlich wirst du bemerken, dass dein Geist ruhiger und sehr viel klarer werden wird.',
			},
		],
	},
	{
		id: 4,
		name: 'Vorwärtsbeuge',
		sanscritName: 'पश्चिमोत्तानासन paścimottānāsana',
		about: 'Lege im Langsitz die Hände auf die Oberschenkel, gleite dabei immer weiter nach vorne unten, hin zu den Schienbeinen und vielleicht erreichst du ja sogar deine Füße. Lege Bauch und Brust auf die Beine, soweit du eben kommst. Wenn du nicht so flexibel bist, gehst du eben nicht so tief nach unten.Der untere Rücken bleibt dabei gerade.',
		wirkung: [
			{
				wirkung: 'körperlich',
				text: 'Paschimottanasana können die Gedanken zur Ruhe kommen. Paschimottanasana kräftigt den gesamten Bauchraum, der gesamte Becken und Bauchbereich wird massiert, aktviert und gestärkt, dazu gehören Leber, Milz, Nieren, Adrenalindrüsen, Bauchspeicheldrüsen, das Urogenitalsystem und das fördert somit die Ausleitung von Schadstoffen aus unserem Körper. Die Wirbelsäule wird verjüngt. Wenn man Paschimottanasana eine längere Zeit hält werden die Bauchorgane, das Herz und die Wirbelsäule gut durchmassiert.Paschimottanasana verbessert die Gelenkigkeit der Hüftgelenke und streckt die Muskeln der Kniesehen.',
			},
			{
				wirkung: 'energetisch',
				text: 'Paschimottanasana ist, besonders bei langem Halten, eine der energetisch am stärksten wirkenden Asanas. Paschimottanasana gilt als eine der Stellungen, die beim fortgeschrittenen Yogi die Kundalini erwecken kann. Alle Chakras der Wirbelsäule werden aktiviert und die feinstoffliche Wirbelsäule (Sushumna, auch Paschimottha Nadi) geöffnet. Zur Verstärkung der energetischen Wirkung kannst du dir vorstellen, wie sich beim Einatmen Lichtenergie im Muladhara Chakra sammelt, welches du dann beim Ausatmen durch die Wirbelsäule nach oben bis zum Sahasrara Chakra aufsteigen lässt.Besonders angesprochene Chakras sind Muladhara,Swadisthana,Manipura und Ajna Chakra.',
			},
			{
				wirkung: 'geistig',
				text: 'Auf geistiger Ebene fördert Paschimottanasana die Entwicklung von Geduld, Hingabe, Demut, Gelassenheit und Ausdauer. Verstärkt werden kann die Wirkung mit Affirmationen wie: "Ich bin geduldig", "Ich lasse ganz los", "Mit Ausdauer und Gelassenheit werde ich mein Ziel erreichen" usw. Paschimottanasana ist auch gut geeignet um die Gedanken zur Ruhe zu bringen. ',
			},
		],
	},
	{
		id: 5,
		name: 'Heuschrecke',
		sanscritName: 'शलभासन śalabhāsana',
		about: 'Ausgangsposition ist die Bauchlage. Bringe deine Arme vor deinem Rumpf zusammen, die Hände sind gefaltet, in Fäusten oder liegen flach auf dem Boden - unter oder neben dem Körper. Die kleinen Finger liegen dabei nebeneinander. Du solltest dich in dieser Haltung mit den Armen gut abstützen können.Mit der Einatmung baust du Körperspannung auf und hebst die Beine soweit wie möglich nach oben. Atme tief und gleichmäßig. Halte die Heuschrecke so lange wie möglich.Mit der Ausatmung legst du die Beine wieder ab und spürst in der Bauchentspannungslage der Wirkung der Asana nach.',
		wirkung: [
			{
				wirkung: 'körperlich',
				text: 'In der Heuschrecke wird der Druck auf den Bauch verstärkt und die Funktion des Darmes reguliert. Leber, Bauchspeicheldrüse und Nieren werden massiert. Die Rücken- und Gesäßmuskeln werden gestärkt.Gedehnte Muskeln: Quadrizeps (Beinstrecker), Psoas (Hüftbeuger), Rectus Abdomini (Bauchmuskeln), eventuell Pectoralis',
			},
			{
				wirkung: 'energetisch',
				text: 'Die Heuschrecke wirkt stark aktivierend, öffnet die Chakras in der Sushumna - insbesondere das Vishuddha Chakra.',
			},
			{
				wirkung: 'geistig',
				text: 'Mit Shalabhasana kannst du Selbstbewusstsein, Willenskraft und Durchsetzungsvermögen entwickeln. ',
			},
		],
	},
	{
		id: 6,
		image: BowPose,
		alt: 'Bogen',
		name: 'Bogen',
		sanscritName: 'धनुरासन dhanurāsana',
		about: 'Bei dieser öffnenden Yoga-Übung Dhanurasana (Sanskrit: धनुरासन) liegst du auf dem Bauch, während deine Hände deine Fußgelenke greifen und der Brustkorb nach oben gebogen wird. Dadurch streckst du deine Wirbelsäule, entspannst und stärkst deine oberen Rückenmuskeln und deine Schultern, gleichzeitig stählst du Arme und Oberschenkel.',
		wirkung: [
			{
				wirkung: 'körperlich',
				text: 'Dhanurasana ist gut für die ganze Wirbelsäule, angefangen von den Halswirbeln, über die Brust-, Lenden- bis zu den Sakralwirbeln.Die Rückenmuskeln werden gestärkt. Die Wirbelsäule wird ausgerichtet. Die Nerven, Sehnen und Muskeln werden gestreckt, was Steifheit verhindert.Der ganze Verdauungskanal wird gestärkt. Leber, Nieren Bauchorgane und -muskeln werden massiert.Gedehnte Muskeln : Pectoralis,Rectus Abdomini,Psoas,Quadrizep.Gestärkte Muskeln:Trapezius,Longissimus,Unterarmmuskel,Gluteus,Quadrizeps.',
			},
			{
				wirkung: 'energetisch',
				text: 'Aktiviert das Sonnengeflecht.Das Sonnengeflecht ist ein bedeutender Speicher von Sonnenenergie im menschlichen Körper. Mit einem gesunden Sonnengeflecht kann ein Mensch sehr viel in der Welt bewirken, weil er sehr viel Prana zur Verfügung hat und dadurch durchsetzungsstark, mutig und charismatisch ist.',
			},
			{
				wirkung: 'geistig',
				text: 'Dhanurasana entwickelt Selbstvertrauen, Erhebt den Geist und führt zu einem Gefühl der Erhabenheit.',
			},
		],
	},
	{
		id: 7,
		name: 'Drehsitz',
		sanscritName: 'अर्धमत्स्येन्द्रासन ardhamatsyendrāsana',
		about: 'Ausgehend vom Fersensitz setzt du dein Gesäß links neben der Hüfte ab, den rechten Fuß setzt du neben dem linken Knie auf und mit dem linken Arm greifst du um das rechte Knie. Hier kannst du dich noch einmal an deinem Knie aufrichten und mit der nächsten Einatmung den rechten Arm weit nach oben ausstrecken.Mit der Ausatmung den Oberkörper um die eigene Achse nach rechts drehen und die Hand auf dem Boden ablegen. Auf der hinteren Hand ist kein Gewicht. Wenn du schon stabil in der Position sitzt, lege den rechten Unterarm in den Rücken.',
		wirkung: [
			{
				wirkung: 'körperlich',
				text: 'Im Drehsitz wird die Wirbelsäule durch die Drehung des Körpers flexibel und das sympathische Nervensystem wird gestärkt. Diese Asana heilt allgemein nervöse Leiden. Die Bauchorgane werden massiert, dabei werden Gifte abgeführt, die bei der Verdauung entstehen.Gedehnte Muskeln: Gluteus, Obliquus und Transversus Abdomini (schräge Bauchmuskeln), Latissimus (breite Rückenmuskeln), Lendenmuskeln, Pectoralis (Brustmuskeln).Gestärkte Muskeln: Latissimus, Obliquus und Transversus Abdomini (schräge Bauchmuskeln), Lendenmuskeln (jeweils auf der anderen Seite als die gedehnten Muskeln)',
			},
			{
				wirkung: 'energetisch',
				text: 'Der Drehsitz ist eine der energetisch wichtigsten Übungen. Er aktiviert das Sonnengeflecht und öffnet die Sushumna, die feinstoffliche Wirbelsäule. Angesprochen werden Muladhara, Ajna und Sahasrara Chakra.',
			},
			{
				wirkung: 'geistig',
				text: 'Der Drehsitz wirkt stressabbauend, nervenstärkend, beruhigend und harmonisierend. Er gibt dir die Kraft, im inneren Gleichgewicht zu bleiben, auch wenn äußere Umstände sich ändern, die innere Würde zu behalten, auch wenn man sich an äußere Umstände anpassen muss, seinen Idealen treu zu bleiben, auch wenn man auf andere Menschen eingeht und auf sie zugeht.',
			},
		],
	},
	{
		id: 8,
		image: Crow,
		alt: 'Krähe',
		name: 'Krähe',
		sanscritName: 'मयूरासन mayūrāsana',
		about: 'In der Hocke platzierst du die Hände mit gespreizten Fingern schulterbreit auf dem Boden. Dein Gesäß geht nach oben, sodass du deine Knie auf den Oberarmen ablegen kannst. Nun verlagere immer mehr Gewicht auf die Hände, komme auf die Zehenspitzen, um dann die Füße ganz vom Boden zu lösen.Um besser das Gleichgewicht zu halten, gib auch Gewicht auf die Fingerspitzen und fixiere mit dem Blick einen Punkt vor dir. Die Zehenspitzen kannst du zusammenbringen, um noch mehr Stabilität aufzubauen. Halte die Position einige Atemzüge und setze dann die Füße wieder auf dem Boden ab.',
		wirkung: [
			{
				wirkung: 'körperlich',
				text: 'Die Handgelenke werden gekräftigt und flexibel. Die Armmuskeln werden gestärkt. Die Krähe fördert Körperbewusstsein und Gleichgewicht. Sie hilft Nerven gesund zu halten und beugt Nervenproblemen vor.Gedehnte Muskeln: Gluteus (Gesäßmuskeln).Gestärkte Muskeln: Trizeps (Armstrecker), Delta-Muskeln (Schultermuskeln)',
			},
			{
				wirkung: 'energetisch',
				text: 'Die Krähe wirkt aktivierend und gleichzeitig harmonisierend. Angesprochen werden Ajna und Sahasrara Chakra.',
			},
			{
				wirkung: 'geistig',
				text: ' Kakasana hilft dir, Selbstbewusstsein, Mut, Konzentration, Gleichgewicht und Willenskraft zu entwickeln.',
			},
		],
	},
	{
		id: 9,
		name: 'Stehende Vorwärtsbeuge',
		sanscritName: 'पादहस्तासन pāda-hastāsana',
		about: 'Ausgangsposition ist die Bergstellung (Tadasana). Von hier aus hebe mit der nächsten Einatmung die Arme weit nach oben und strecke dich mit der Ausatmung weit nach vorne unten, bis die Hände oder die Fingerspitzen auf dem Boden ankommen. Wenn dir das nicht möglich ist, kannst du auch etwas deine Knie beugen, um die Hände flach neben den Füßen abzulegen.',
		wirkung: [
			{
				wirkung: 'körperlich',
				text: 'Padahastasana hat zum Teil die gleichen Wirkungen wie die Vorwärtsbeuge (Paschimotthanasana). Sie hält die Taille schlank, stellt die Elastizität der Wirbelsäule wieder her und dehnt die Sehnen in den Beinen, vor allem in den Kniekehlen. Sie unterstützt außerdem die Blutzufuhr zum Gehirn und hat einen Teil der Wirkungen der Umkehrstellungen.Gedehnte Muskeln: Gastrocnemius (Wadenmuskeln), Bizeps Femoris (Beinbeuger), Gluteus (Gesäßmuskeln), Longissimus (Rückenstrecker)',
			},
			{
				wirkung: 'energetisch',
				text: 'Padahastasana wirkt belebend und energetisierend. Angesprochen werden Muladhara und Sahasrara Chakra.',
			},
			{
				wirkung: 'geistig',
				text: 'Mit der stehenden Vorwärtsbeuge entwickelst du Demut und Hingabe. ',
			},
		],
	},
	{
		id: 10,
		image: TrianglePose,
		alt: 'Dreieck',
		name: 'Dreieck',
		sanscritName: 'त्रिकोणासन trikoṇāsana',
		about: 'Ausgangsposition ist eine gegrätschte Standhaltung, so dass die Knöchel unter den Handgelenken der ausgestreckten Arme sind. Die Füße sind parallel zueinander. Halte die Arme an den Seiten neben den Beinen am Körper angelegt.Atme ein, hebe den rechten Arm hoch. Atme aus und beuge den Rumpf nach links. Halte dabei den Arm am Ohr. Atme 2-3 Mal tief ein und aus. Spüre die Dehnung auf der rechten Körperseite',
		wirkung: [
			{
				wirkung: 'körperlich',
				text: 'Dehnt die Beininnenseite (Adductor, Gracilis, Semimembranosus) und öffnet die Hüfte (Iliopsoas, Pectineus). Die Flanken (Obliqus externus abdomini) werden gedehnt, die Rumpfmuskulatur (obliquus externus abdominis, obliquus internus abdominis, transversus abdominis, intercostales, transversus thoracis) gekräftigt und die Wirbelsäule mobilisiert.Gedehnte Muskeln: Obliquus und Transversus Abdomini (schräge Bauchmuskeln), Latissimus (Breite Rückenmuskeln), Trizeps (Armstrecker)',
			},
			{
				wirkung: 'energetisch',
				text: 'Trikonasana aktiviert alle Chakras und hilft, die Energie im Körper zum Fließen zu bringen und zu harmonisieren.',
			},
			{
				wirkung: 'geistig',
				text: 'Die Asana hilft sich für Neues zu öffnen und Dinge aus einem anderen Blickwinkel zu sehen. ',
			},
		],
	},
	{
		id: 11,
		image: HeadStand,
		alt: 'Kopfstand',
		name: 'Kopfstand',
		sanscritName: 'शीर्षासन śīrṣāsana',
		about: 'Verschränke die Finger und schaffe eine feste Basis über die Unterarme. Nun strecke die Beine und schiebe dein Gesäß nach oben. Der Rücken bleibt lang und die Beine sind aktiv gestreckt. Atme ein und schiebe den Kopf vor die Faust, der Oberkörper kommt parallel zum Boden, wobei die Beine gestreckt bleiben',
		wirkung: [
			{wirkung: 'körperlich', text: 'harmonisierend ,Schlidrüse , Spannung lösend'},
			{wirkung: 'energetisch', text: 'Aktivirend,öffnent'},
			{wirkung: 'geistig', text: 'Verleiht frieden '},
		],
	},
];
