# 📱 James Seo - Android Developer Portfolio

<div align="center">

![Profile](https://img.shields.io/badge/Role-Android%20Developer-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![Experience](https://img.shields.io/badge/Experience-4%20Years-blue?style=for-the-badge)
![Projects](https://img.shields.io/badge/Live%20Services-5%20Projects-success?style=for-the-badge)

### FinTech Specialist | 4년간 5개 상용 서비스 개발

**일평균 수만 건 실시간 금융 거래 처리 경험**

[GitHub](https://github.com/hyummys) • [Portfolio Site](https://hyummys.github.io) • ajpuop@naver.com

</div>

---

## 📑 목차

1. [프로젝트 개요](#-프로젝트-개요)
2. [CU 결제 단말기 (Main Project)](#-1-cu-편의점-android-결제-단말기)
3. [차세대 Android 플랫폼](#-2-차세대-android-결제-플랫폼)
4. [EMV Level 2 국제 인증](#-3-mastercardvisa-emv-level-2-인증)
5. [Linux 시스템 프로젝트](#-4-linux-기반-프로젝트)
6. [기술 스택 상세](#-기술-스택-상세)
7. [아키텍처 & 코드 품질](#-아키텍처--코드-품질)
8. [성과 지표](#-성과-지표)

---

## 🎯 프로젝트 개요

### 타임라인

```
2021.09 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2025.12 (현재)
   │
   ├─ 2021.09-2022.05: KT Corporation (Android TV, Python)
   │
   ├─ 2022.05: 나이스정보통신 입사
   │
   ├─ 2022.06-2023.03: EMV Level 2 인증 프로젝트
   │                     └─ Mastercard, VISA 공식 인증 획득
   │
   ├─ 2022.08-2023.12: Linux 통합 서명패드 (Multi-VAN)
   │                     └─ 회사 최초 통합 서명패드 상용화
   │
   ├─ 2022.10-2023.06: E1/GS칼텍스 주유소 결제 단말기
   │                     └─ 전국 주유소 배포 완료
   │
   ├─ 2023.01-현재: CU 편의점 Android 결제 단말기
   │                 └─ 전국 상용화 운영 중
   │
   └─ 2024.01-현재: 차세대 Android 플랫폼
                     └─ 89.8% 코드 재사용률 달성
```

### 프로젝트 요약

| # | 프로젝트명 | 플랫폼 | 상태 | 핵심 기술 |
|---|----------|--------|------|----------|
| 1 | **CU 결제 단말기** | Android | 🟢 운영중 | Kotlin, Compose, MVVM, Hilt |
| 2 | **차세대 플랫폼** | Android | 🟢 운영중 | Clean Architecture, Multi-module |
| 3 | **EMV LV2 인증** | Android/Python | ✅ 완료 | PyQt5, ISO 14443, EMV |
| 4 | **통합 서명패드** | Linux | 🟢 운영중 | C/C++, Multi-VAN, NFC |
| 5 | **주유소 단말기** | Linux | 🟢 운영중 | C/C++, 4G/WiFi, POS |
| 6 | **API 플랫폼** | Linux | 🟢 운영중 | C/C++, Modular API |

---

## 🏆 1. CU 편의점 Android 결제 단말기

<div align="center">

### 🎯 Main Project - Modern Android 개발 역량의 집약

**전국 CU 편의점 체인 | 단말 당 일 수천 건 거래 처리**

</div>

### 📋 프로젝트 정보

| 항목 | 내용 |
|------|------|
| **기간** | 2023.01 - 현재 (2년) |
| **역할** | 단독 개발 (설계/개발/CS) |
| **플랫폼** | Android (Kotlin) |
| **상태** | 전국 상용화 운영 중 |
| **규모** | 전국 CU 편의점 체인 |

### 🛠️ 기술 스택

```kotlin
// Language & UI
Kotlin 1.9.0
Jetpack Compose 1.5.0

// Architecture
MVVM (Model-View-ViewModel)
Clean Architecture (3-Layer)

// Dependency Injection
Hilt 2.48

// Asynchronous Programming
Kotlin Coroutines 1.7.0
Kotlin Flow

// Network
Retrofit 2.9.0
OkHttp 4.11.0

// Local Database
Room 2.5.2
SQLite

// Media Player
ExoPlayer 2.19.0

// Testing
JUnit 4.13.2
Mockk 1.13.7
Espresso 3.5.1
```

### 🏗️ 아키텍처 구조

```
┌─────────────────────────────────────────────┐
│           Presentation Layer                │
│  ┌──────────────────────────────────────┐   │
│  │  Jetpack Compose UI                  │   │
│  │  - PaymentScreen                     │   │
│  │  - TransactionScreen                 │   │
│  │  - AdvertisementScreen               │   │
│  └──────────────────────────────────────┘   │
│  ┌──────────────────────────────────────┐   │
│  │  ViewModels (Hilt Injected)          │   │
│  │  - PaymentViewModel                  │   │
│  │  - TransactionViewModel              │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
                    ↕ (StateFlow/SharedFlow)
┌─────────────────────────────────────────────┐
│             Domain Layer                    │
│  ┌──────────────────────────────────────┐   │
│  │  Use Cases                           │   │
│  │  - ProcessPaymentUseCase             │   │
│  │  - ValidateCardUseCase               │   │
│  │  - SaveTransactionUseCase            │   │
│  └──────────────────────────────────────┘   │
│  ┌──────────────────────────────────────┐   │
│  │  Domain Models                       │   │
│  │  - Payment, Transaction, Card        │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
                    ↕ (Repository Interface)
┌─────────────────────────────────────────────┐
│              Data Layer                     │
│  ┌──────────────────────────────────────┐   │
│  │  Repository Implementations          │   │
│  │  - PaymentRepositoryImpl             │   │
│  │  - TransactionRepositoryImpl         │   │
│  └──────────────────────────────────────┘   │
│  ┌──────────────────────────────────────┐   │
│  │  Data Sources                        │   │
│  │  ├─ Remote (Retrofit API)            │   │
│  │  ├─ Local (Room Database)            │   │
│  │  └─ Hardware (Card Reader SDK)       │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

### 💡 핵심 구현 사항

#### 1. Jetpack Compose를 활용한 선언형 UI

```kotlin
@Composable
fun PaymentScreen(
    viewModel: PaymentViewModel = hiltViewModel()
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()

    PaymentContent(
        paymentState = uiState.paymentState,
        amount = uiState.amount,
        onCardInserted = viewModel::processPayment,
        onCancel = viewModel::cancelPayment
    )
}

@Composable
fun PaymentContent(
    paymentState: PaymentState,
    amount: Int,
    onCardInserted: () -> Unit,
    onCancel: () -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        when (paymentState) {
            is PaymentState.Idle -> IdleContent(amount)
            is PaymentState.Processing -> ProcessingContent()
            is PaymentState.Success -> SuccessContent(paymentState.receipt)
            is PaymentState.Error -> ErrorContent(paymentState.message)
        }
    }
}
```

#### 2. Kotlin Coroutines/Flow를 활용한 비동기 처리

```kotlin
class PaymentViewModel @Inject constructor(
    private val processPaymentUseCase: ProcessPaymentUseCase,
    private val transactionRepository: TransactionRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow(PaymentUiState())
    val uiState: StateFlow<PaymentUiState> = _uiState.asStateFlow()

    fun processPayment() = viewModelScope.launch {
        _uiState.update { it.copy(paymentState = PaymentState.Processing) }

        processPaymentUseCase()
            .catch { exception ->
                _uiState.update {
                    it.copy(paymentState = PaymentState.Error(exception.message))
                }
            }
            .collect { result ->
                _uiState.update {
                    it.copy(paymentState = PaymentState.Success(result))
                }
                saveTransaction(result)
            }
    }

    private suspend fun saveTransaction(receipt: Receipt) {
        transactionRepository.saveTransaction(receipt.toTransaction())
    }
}
```

#### 3. Hilt를 활용한 의존성 주입

```kotlin
@Module
@InstallIn(SingletonComponent::class)
object NetworkModule {

    @Provides
    @Singleton
    fun provideOkHttpClient(): OkHttpClient {
        return OkHttpClient.Builder()
            .addInterceptor(AuthInterceptor())
            .addInterceptor(LoggingInterceptor())
            .connectTimeout(30, TimeUnit.SECONDS)
            .readTimeout(30, TimeUnit.SECONDS)
            .build()
    }

    @Provides
    @Singleton
    fun provideRetrofit(okHttpClient: OkHttpClient): Retrofit {
        return Retrofit.Builder()
            .baseUrl(BuildConfig.API_BASE_URL)
            .client(okHttpClient)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }

    @Provides
    @Singleton
    fun providePaymentApi(retrofit: Retrofit): PaymentApi {
        return retrofit.create(PaymentApi::class.java)
    }
}

@Module
@InstallIn(SingletonComponent::class)
object RepositoryModule {

    @Provides
    @Singleton
    fun providePaymentRepository(
        paymentApi: PaymentApi,
        paymentDao: PaymentDao,
        cardReaderManager: CardReaderManager
    ): PaymentRepository {
        return PaymentRepositoryImpl(paymentApi, paymentDao, cardReaderManager)
    }
}
```

#### 4. Room Database를 활용한 로컬 데이터 관리

```kotlin
@Entity(tableName = "transactions")
data class TransactionEntity(
    @PrimaryKey(autoGenerate = true)
    val id: Long = 0,
    val transactionId: String,
    val amount: Int,
    val cardNumber: String,
    val timestamp: Long,
    val status: TransactionStatus,
    @Embedded val receipt: ReceiptEntity?
)

@Dao
interface TransactionDao {
    @Query("SELECT * FROM transactions ORDER BY timestamp DESC")
    fun getAllTransactions(): Flow<List<TransactionEntity>>

    @Query("SELECT * FROM transactions WHERE status = :status")
    fun getTransactionsByStatus(status: TransactionStatus): Flow<List<TransactionEntity>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertTransaction(transaction: TransactionEntity)

    @Query("DELETE FROM transactions WHERE timestamp < :cutoffTime")
    suspend fun deleteOldTransactions(cutoffTime: Long)
}

@Database(
    entities = [TransactionEntity::class],
    version = 1,
    exportSchema = false
)
abstract class AppDatabase : RoomDatabase() {
    abstract fun transactionDao(): TransactionDao
}
```

### 🚀 성능 최적화 상세

#### Before → After 비교

| 항목 | Before | After | 개선율 |
|------|--------|-------|--------|
| **앱 시작 속도** | 2.8초 | 1.9초 | **32% ↓** |
| **결제 처리 시간** | 1.5초 | 1.0초 | **33% ↓** |
| **메모리 사용량** | 180MB | 135MB | **25% ↓** |
| **CPU 사용률** | 45% | 32% | **29% ↓** |
| **배터리 소모** | 15%/hr | 11%/hr | **27% ↓** |

#### 최적화 기법

**1. 하드웨어 가속 활용**
```kotlin
// GPU 렌더링 활성화
WindowCompat.setDecorFitsSystemWindows(window, false)
window.setFlags(
    WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED,
    WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED
)
```

**2. 메모리 최적화**
```kotlin
// 비트맵 메모리 최적화
val options = BitmapFactory.Options().apply {
    inSampleSize = 2
    inPreferredConfig = Bitmap.Config.RGB_565
    inJustDecodeBounds = false
}

// 대용량 리스트 LazyColumn으로 처리
@Composable
fun TransactionList(transactions: List<Transaction>) {
    LazyColumn {
        items(transactions, key = { it.id }) { transaction ->
            TransactionItem(transaction)
        }
    }
}
```

**3. 네트워크 최적화**
```kotlin
// Retrofit 캐싱 전략
val cacheSize = 10 * 1024 * 1024 // 10 MB
val cache = Cache(context.cacheDir, cacheSize.toLong())

val okHttpClient = OkHttpClient.Builder()
    .cache(cache)
    .addNetworkInterceptor { chain ->
        val response = chain.proceed(chain.request())
        response.newBuilder()
            .header("Cache-Control", "public, max-age=60")
            .build()
    }
    .build()
```

### 📱 주요 기능 상세

#### 1. 실시간 카드 결제 처리

```kotlin
class CardReaderManager @Inject constructor(
    private val cardReaderSDK: CardReaderSDK
) {
    suspend fun readCard(): Flow<CardReadResult> = callbackFlow {
        cardReaderSDK.startReading { result ->
            when (result) {
                is CardReadResult.Success -> {
                    trySend(result)
                    close()
                }
                is CardReadResult.Error -> {
                    close(Exception(result.message))
                }
                is CardReadResult.Canceled -> {
                    close()
                }
            }
        }

        awaitClose { cardReaderSDK.stopReading() }
    }
}
```

#### 2. ExoPlayer 기반 광고 시스템

```kotlin
@Composable
fun AdvertisementPlayer(
    videoUrl: String,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current
    val exoPlayer = remember {
        ExoPlayer.Builder(context).build().apply {
            val mediaItem = MediaItem.fromUri(videoUrl)
            setMediaItem(mediaItem)
            prepare()
            playWhenReady = true
            repeatMode = Player.REPEAT_MODE_ONE
        }
    }

    DisposableEffect(Unit) {
        onDispose {
            exoPlayer.release()
        }
    }

    AndroidView(
        factory = { ctx ->
            PlayerView(ctx).apply {
                player = exoPlayer
                useController = false
            }
        },
        modifier = modifier
    )
}
```

#### 3. 거래 데이터 자동 복구 메커니즘

```kotlin
class TransactionRecoveryManager @Inject constructor(
    private val transactionRepository: TransactionRepository,
    private val paymentApi: PaymentApi
) {
    suspend fun recoverFailedTransactions() {
        transactionRepository.getFailedTransactions()
            .collect { failedTransactions ->
                failedTransactions.forEach { transaction ->
                    retryTransaction(transaction)
                }
            }
    }

    private suspend fun retryTransaction(transaction: Transaction) {
        try {
            val result = paymentApi.confirmTransaction(
                transactionId = transaction.id,
                amount = transaction.amount
            )

            if (result.isSuccessful) {
                transactionRepository.updateTransactionStatus(
                    transaction.id,
                    TransactionStatus.SUCCESS
                )
            }
        } catch (e: Exception) {
            Log.e("Recovery", "Failed to recover transaction: ${transaction.id}", e)
        }
    }
}
```

### 🔒 보안 구현

#### Android Keystore를 활용한 암호화

```kotlin
class CryptoManager {
    private val keyStore = KeyStore.getInstance("AndroidKeyStore").apply {
        load(null)
    }

    private val encryptCipher get() = Cipher.getInstance(TRANSFORMATION).apply {
        init(Cipher.ENCRYPT_MODE, getKey())
    }

    private fun getKey(): Key {
        val existingKey = keyStore.getEntry(KEY_ALIAS, null) as? KeyStore.SecretKeyEntry
        return existingKey?.secretKey ?: createKey()
    }

    private fun createKey(): Key {
        return KeyGenerator.getInstance(KeyProperties.KEY_ALGORITHM_AES, "AndroidKeyStore")
            .apply {
                init(
                    KeyGenParameterSpec.Builder(
                        KEY_ALIAS,
                        KeyProperties.PURPOSE_ENCRYPT or KeyProperties.PURPOSE_DECRYPT
                    )
                    .setBlockModes(KeyProperties.BLOCK_MODE_CBC)
                    .setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_PKCS7)
                    .setUserAuthenticationRequired(false)
                    .setRandomizedEncryptionRequired(true)
                    .build()
                )
            }
            .generateKey()
    }

    fun encrypt(data: String): ByteArray {
        return encryptCipher.doFinal(data.toByteArray())
    }
}
```

### 🧪 테스트 코드

```kotlin
@HiltAndroidTest
class PaymentViewModelTest {

    @get:Rule
    val hiltRule = HiltAndroidRule(this)

    @Inject
    lateinit var processPaymentUseCase: ProcessPaymentUseCase

    private lateinit var viewModel: PaymentViewModel

    @Before
    fun setup() {
        hiltRule.inject()
        viewModel = PaymentViewModel(processPaymentUseCase)
    }

    @Test
    fun `결제 처리 성공 시 Success 상태로 변경`() = runTest {
        // Given
        val receipt = Receipt(transactionId = "123", amount = 10000)
        coEvery { processPaymentUseCase() } returns flowOf(receipt)

        // When
        viewModel.processPayment()

        // Then
        val uiState = viewModel.uiState.value
        assert(uiState.paymentState is PaymentState.Success)
        assertEquals(receipt, (uiState.paymentState as PaymentState.Success).receipt)
    }
}
```

---

## 🏗️ 2. 차세대 Android 결제 플랫폼

<div align="center">

### 📐 아키텍처 설계의 정점 - 89.8% 코드 재사용률

**단일 소스로 다중 기종 지원**

</div>

### 🎯 프로젝트 목표

기존 단말기들의 중복 코드 문제를 해결하고, Modern Android 기술 스택 기반의 **확장 가능한 플랫폼** 구축

### 🏗️ Multi-Module 아키텍처

```
project-root/
│
├── app/                          # Application Module
│   ├── src/main/
│   │   ├── AndroidManifest.xml
│   │   └── kotlin/
│   │       └── com.nice.payment/
│   │           ├── PaymentApplication.kt
│   │           └── MainActivity.kt
│   └── build.gradle.kts
│
├── feature/                      # Feature Modules
│   ├── payment/
│   │   ├── src/main/kotlin/
│   │   │   ├── ui/
│   │   │   │   ├── PaymentScreen.kt
│   │   │   │   └── PaymentViewModel.kt
│   │   │   └── di/
│   │   │       └── PaymentModule.kt
│   │   └── build.gradle.kts
│   │
│   ├── transaction/
│   │   └── ... (similar structure)
│   │
│   └── advertisement/
│       └── ... (similar structure)
│
├── core/                         # Core Modules
│   ├── ui/                       # UI Components
│   │   ├── src/main/kotlin/
│   │   │   ├── component/
│   │   │   │   ├── Button.kt
│   │   │   │   ├── TextField.kt
│   │   │   │   └── LoadingIndicator.kt
│   │   │   └── theme/
│   │   │       ├── Color.kt
│   │   │       ├── Type.kt
│   │   │       └── Theme.kt
│   │   └── build.gradle.kts
│   │
│   ├── domain/                   # Domain Models & Use Cases
│   │   ├── src/main/kotlin/
│   │   │   ├── model/
│   │   │   │   ├── Payment.kt
│   │   │   │   └── Transaction.kt
│   │   │   ├── usecase/
│   │   │   │   └── ProcessPaymentUseCase.kt
│   │   │   └── repository/
│   │   │       └── PaymentRepository.kt
│   │   └── build.gradle.kts
│   │
│   ├── data/                     # Data Layer
│   │   ├── src/main/kotlin/
│   │   │   ├── repository/
│   │   │   ├── datasource/
│   │   │   └── api/
│   │   └── build.gradle.kts
│   │
│   └── common/                   # Common Utilities
│       ├── src/main/kotlin/
│       │   ├── util/
│       │   └── extension/
│       └── build.gradle.kts
│
└── hardware/                     # Hardware Integration
    ├── cardreader/
    │   └── ... (Card reader SDK wrapper)
    └── printer/
        └── ... (Printer SDK wrapper)
```

### 📊 코드 재사용률 89.8% 달성 방법

#### 공통 로직 추상화

```kotlin
// core:domain - 모든 기종에서 공통으로 사용
interface PaymentRepository {
    suspend fun processPayment(request: PaymentRequest): Result<PaymentResponse>
    suspend fun getTransactionHistory(): Flow<List<Transaction>>
}

// core:data - 공통 구현체
class PaymentRepositoryImpl @Inject constructor(
    private val paymentApi: PaymentApi,
    private val transactionDao: TransactionDao,
    private val cardReaderManager: CardReaderManager
) : PaymentRepository {
    override suspend fun processPayment(request: PaymentRequest): Result<PaymentResponse> {
        return try {
            val card = cardReaderManager.readCard()
            val response = paymentApi.requestPayment(request.copy(cardInfo = card))
            transactionDao.insert(response.toEntity())
            Result.success(response)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
```

#### 기종별 하드웨어만 교체

```kotlin
// hardware:cardreader:interface - 공통 인터페이스 (89.8%에 포함)
interface CardReaderManager {
    suspend fun readCard(): Card
    suspend fun cancelReading()
}

// hardware:cardreader:pax - PAX 단말기용 구현 (10.2% 차별화)
class PaxCardReaderManager @Inject constructor(
    private val paxSDK: PaxSDK
) : CardReaderManager {
    override suspend fun readCard(): Card = suspendCoroutine { continuation ->
        paxSDK.startCardReading { result ->
            continuation.resume(result.toCard())
        }
    }
}

// hardware:cardreader:nexgo - NEXGO 단말기용 구현 (10.2% 차별화)
class NexgoCardReaderManager @Inject constructor(
    private val nexgoSDK: NexgoSDK
) : CardReaderManager {
    override suspend fun readCard(): Card = suspendCoroutine { continuation ->
        nexgoSDK.readCard { result ->
            continuation.resume(result.toCard())
        }
    }
}
```

#### Hilt를 활용한 기종별 DI 설정

```kotlin
// app - PAX 기종 빌드용
@Module
@InstallIn(SingletonComponent::class)
object PaxHardwareModule {
    @Provides
    @Singleton
    fun provideCardReaderManager(
        paxSDK: PaxSDK
    ): CardReaderManager = PaxCardReaderManager(paxSDK)
}

// app - NEXGO 기종 빌드용
@Module
@InstallIn(SingletonComponent::class)
object NexgoHardwareModule {
    @Provides
    @Singleton
    fun provideCardReaderManager(
        nexgoSDK: NexgoSDK
    ): CardReaderManager = NexgoCardReaderManager(nexgoSDK)
}
```

### 📦 Build Variants를 활용한 멀티 기종 지원

```kotlin
// app/build.gradle.kts
android {
    flavorDimensions += "device"

    productFlavors {
        create("pax") {
            dimension = "device"
            applicationIdSuffix = ".pax"
            versionNameSuffix = "-pax"
        }

        create("nexgo") {
            dimension = "device"
            applicationIdSuffix = ".nexgo"
            versionNameSuffix = "-nexgo"
        }

        create("sunmi") {
            dimension = "device"
            applicationIdSuffix = ".sunmi"
            versionNameSuffix = "-sunmi"
        }
    }
}
```

### 🎨 Design System 구축

```kotlin
// core:ui - 공통 디자인 시스템
object NiceColors {
    val Primary = Color(0xFF1976D2)
    val Secondary = Color(0xFF424242)
    val Success = Color(0xFF4CAF50)
    val Error = Color(0xFFF44336)
}

object NiceTypography {
    val H1 = TextStyle(
        fontSize = 32.sp,
        fontWeight = FontWeight.Bold
    )
    val Body1 = TextStyle(
        fontSize = 16.sp,
        fontWeight = FontWeight.Normal
    )
}

@Composable
fun NiceButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true
) {
    Button(
        onClick = onClick,
        enabled = enabled,
        modifier = modifier
            .fillMaxWidth()
            .height(56.dp),
        colors = ButtonDefaults.buttonColors(
            containerColor = NiceColors.Primary
        )
    ) {
        Text(
            text = text,
            style = NiceTypography.Body1
        )
    }
}
```

---

## 🏆 3. Mastercard/VISA EMV Level 2 인증

<div align="center">

### 🌍 글로벌 표준 인증 - 계획성과 꼼꼼함의 증명

**6개월간 수백 가지 테스트 케이스 검증**

</div>

### 📋 인증 개요

| 항목 | 내용 |
|------|------|
| **표준** | EMV Contactless Payment Specification |
| **인증 레벨** | Level 2 (Application Level) |
| **브랜드** | Mastercard PayPass, VISA payWave |
| **프로토콜** | ISO 14443 Type A/B |
| **보안** | PCI DSS 준수 |

### 🛠️ PyQt5 카드 테스터 Emulator

#### 개발 배경
Mastercard 인증 테스트를 위해서는 수백 가지 카드 시나리오를 검증해야 하는데, 실물 카드로는 한계가 있어 소프트웨어 기반 Emulator를 자체 개발

#### 주요 기능

```python
# main.py - PyQt5 기반 카드 Emulator
from PyQt5.QtWidgets import QApplication, QMainWindow, QWidget
from PyQt5.QtCore import QThread, pyqtSignal
import nfc

class CardEmulator(QMainWindow):
    def __init__(self):
        super().__init__()
        self.init_ui()
        self.nfc_reader = NFCReader()

    def init_ui(self):
        self.setWindowTitle('Mastercard EMV Test Emulator')
        self.setGeometry(100, 100, 800, 600)

        # Card Type Selection
        self.card_type_combo = QComboBox()
        self.card_type_combo.addItems([
            'Visa Credit',
            'Mastercard Credit',
            'Mastercard Debit',
            'Visa Contactless',
            'Mastercard PayPass'
        ])

        # EMV Tag Editor
        self.tag_editor = EMVTagEditor()

        # Transaction Amount
        self.amount_input = QLineEdit()
        self.amount_input.setPlaceholderText('Enter amount (e.g., 1000)')

        # Start Button
        self.start_btn = QPushButton('Start Transaction')
        self.start_btn.clicked.connect(self.start_transaction)

    def start_transaction(self):
        card_data = self.build_card_data()
        self.nfc_reader.emulate_card(card_data)

    def build_card_data(self):
        return {
            'pan': self.pan_input.text(),
            'expiry': self.expiry_input.text(),
            'amount': int(self.amount_input.text()),
            'emv_tags': self.tag_editor.get_tags()
        }

class NFCReader(QThread):
    transaction_complete = pyqtSignal(dict)

    def emulate_card(self, card_data):
        clf = nfc.ContactlessFrontend('usb')

        # APDU 명령어 시퀀스 생성
        apdu_sequence = self.generate_apdu_sequence(card_data)

        # NFC 태그 에뮬레이션
        tag = clf.connect(rdwr={'on-connect': lambda tag: self.on_connect(tag, apdu_sequence)})

    def generate_apdu_sequence(self, card_data):
        """EMV 표준에 따른 APDU 명령어 생성"""
        sequence = []

        # SELECT PPSE
        sequence.append({
            'command': [0x00, 0xA4, 0x04, 0x00, 0x0E, ...],
            'response': self.build_ppse_response()
        })

        # SELECT AID
        sequence.append({
            'command': [0x00, 0xA4, 0x04, 0x00, ...],
            'response': self.build_aid_response(card_data)
        })

        # GPO (Get Processing Options)
        sequence.append({
            'command': [0x80, 0xA8, 0x00, 0x00, ...],
            'response': self.build_gpo_response(card_data)
        })

        # READ RECORD
        for record in range(1, 5):
            sequence.append({
                'command': [0x00, 0xB2, record, 0x0C, 0x00],
                'response': self.build_record_response(card_data, record)
            })

        return sequence
```

#### EMV Tag 데이터 구조 분석

```python
class EMVTagParser:
    """EMV Tag TLV 구조 파싱"""

    EMV_TAGS = {
        # Application Identifiers
        '4F': 'Application Identifier (AID)',
        '50': 'Application Label',
        '87': 'Application Priority Indicator',

        # Cardholder Data
        '5A': 'Application Primary Account Number (PAN)',
        '5F20': 'Cardholder Name',
        '5F24': 'Application Expiration Date',
        '5F25': 'Application Effective Date',

        # Transaction Data
        '9F02': 'Amount, Authorized',
        '9F03': 'Amount, Other',
        '9F1A': 'Terminal Country Code',
        '5F2A': 'Transaction Currency Code',

        # Cryptographic Data
        '9F26': 'Application Cryptogram',
        '9F27': 'Cryptogram Information Data',
        '9F36': 'Application Transaction Counter (ATC)',
        '9F10': 'Issuer Application Data',

        # Mastercard Specific
        '9F6E': 'Form Factor Indicator',
        '9F63': 'Product Identification Label',
    }

    @staticmethod
    def parse_tlv(data: bytes) -> dict:
        """TLV 데이터 파싱"""
        result = {}
        index = 0

        while index < len(data):
            # Tag 추출
            tag, tag_len = EMVTagParser.extract_tag(data[index:])
            index += tag_len

            # Length 추출
            length = data[index]
            index += 1

            # Value 추출
            value = data[index:index+length]
            index += length

            tag_hex = tag.hex().upper()
            result[tag_hex] = {
                'name': EMVTagParser.EMV_TAGS.get(tag_hex, 'Unknown'),
                'value': value.hex(),
                'decoded': EMVTagParser.decode_value(tag_hex, value)
            }

        return result
```

### 📊 인증 테스트 결과

#### Mastercard PayPass LV2 테스트 케이스

| Category | Test Cases | Pass | Fail |
|----------|-----------|------|------|
| **Offline Data Authentication** | 45 | 45 | 0 |
| **Cardholder Verification** | 32 | 32 | 0 |
| **Terminal Risk Management** | 28 | 28 | 0 |
| **Terminal Action Analysis** | 38 | 38 | 0 |
| **Card Action Analysis** | 42 | 42 | 0 |
| **Online Processing** | 35 | 35 | 0 |
| **Completion** | 18 | 18 | 0 |
| **Total** | **238** | **238** | **0** |

#### VISA payWave LV2 테스트 케이스

| Category | Test Cases | Pass | Fail |
|----------|-----------|------|------|
| **Transaction Flow** | 52 | 52 | 0 |
| **Offline Authentication** | 38 | 38 | 0 |
| **CVM Processing** | 29 | 29 | 0 |
| **Risk Management** | 34 | 34 | 0 |
| **Online Authorization** | 31 | 31 | 0 |
| **Error Handling** | 26 | 26 | 0 |
| **Total** | **210** | **210** | **0** |

---

## 🐧 4. Linux 기반 프로젝트

### 4-1. Linux 통합 서명패드 (Multi-VAN)

#### VAN사별 프로토콜 구현

```c
// van_protocol.h - VAN사 공통 인터페이스
typedef struct {
    int (*initialize)(void);
    int (*process_payment)(PaymentRequest *req, PaymentResponse *res);
    int (*cancel_payment)(CancelRequest *req, CancelResponse *res);
    int (*close_batch)(BatchRequest *req, BatchResponse *res);
    void (*cleanup)(void);
} VANProtocol;

// nice_van.c - NICE정보통신 VAN 프로토콜 구현
static VANProtocol nice_protocol = {
    .initialize = nice_initialize,
    .process_payment = nice_process_payment,
    .cancel_payment = nice_cancel_payment,
    .close_batch = nice_close_batch,
    .cleanup = nice_cleanup
};

int nice_process_payment(PaymentRequest *req, PaymentResponse *res) {
    unsigned char send_buffer[1024];
    unsigned char recv_buffer[1024];
    int send_len = 0;

    // NICE 전문 생성
    send_len = build_nice_message(req, send_buffer);

    // TCP/IP 통신
    int sock = create_tcp_connection(NICE_SERVER_IP, NICE_SERVER_PORT);
    if (sock < 0) {
        return -1;
    }

    // 송신
    if (send(sock, send_buffer, send_len, 0) < 0) {
        close(sock);
        return -2;
    }

    // 수신
    int recv_len = recv(sock, recv_buffer, sizeof(recv_buffer), 0);
    close(sock);

    if (recv_len < 0) {
        return -3;
    }

    // 응답 파싱
    return parse_nice_response(recv_buffer, recv_len, res);
}

// kis_van.c - KIS정보통신 VAN 프로토콜 구현
static VANProtocol kis_protocol = {
    .initialize = kis_initialize,
    .process_payment = kis_process_payment,
    .cancel_payment = kis_cancel_payment,
    .close_batch = kis_close_batch,
    .cleanup = kis_cleanup
};

// van_manager.c - 멀티 VAN 관리자
typedef enum {
    VAN_TYPE_NICE,
    VAN_TYPE_KIS,
    VAN_TYPE_NPG,
    VAN_TYPE_INTEGRATED
} VANType;

static VANProtocol* van_protocols[] = {
    [VAN_TYPE_NICE] = &nice_protocol,
    [VAN_TYPE_KIS] = &kis_protocol,
    [VAN_TYPE_NPG] = &npg_protocol,
    [VAN_TYPE_INTEGRATED] = &integrated_protocol
};

// VAN사 자동 감지
VANType detect_van_type(const char *terminal_id) {
    // 단말기 ID 패턴으로 VAN사 판별
    if (strncmp(terminal_id, "NICE", 4) == 0) {
        return VAN_TYPE_NICE;
    } else if (strncmp(terminal_id, "KIS", 3) == 0) {
        return VAN_TYPE_KIS;
    } else if (strncmp(terminal_id, "NPG", 3) == 0) {
        return VAN_TYPE_NPG;
    }
    return VAN_TYPE_INTEGRATED;
}

// 통합 결제 처리
int process_payment_multi_van(PaymentRequest *req, PaymentResponse *res) {
    VANType type = detect_van_type(req->terminal_id);
    VANProtocol *protocol = van_protocols[type];

    if (protocol && protocol->process_payment) {
        return protocol->process_payment(req, res);
    }

    return -1;
}
```

### 4-2. E1/GS칼텍스 주유소 결제 단말기

#### 다단계 트랜잭션 플로우

```c
// gas_station.h - 주유소 트랜잭션 상태 관리
typedef enum {
    GAS_STATE_IDLE,
    GAS_STATE_PRESET,       // 주유 예약
    GAS_STATE_FUELING,      // 주유 중
    GAS_STATE_PAYMENT,      // 결제 중
    GAS_STATE_COMPLETE,     // 완료
    GAS_STATE_ERROR         // 오류
} GasStationState;

typedef struct {
    GasStationState state;
    int pump_number;
    int preset_amount;      // 예약 금액
    int actual_amount;      // 실제 주유 금액
    float liters;           // 주유량
    char transaction_id[32];
} GasTransaction;

// gas_station.c - 주유 프리셋
int process_preset(GasTransaction *trans, int pump_num, int amount) {
    trans->state = GAS_STATE_PRESET;
    trans->pump_number = pump_num;
    trans->preset_amount = amount;

    // 주유기 POS와 통신
    if (send_preset_to_pos(pump_num, amount) < 0) {
        trans->state = GAS_STATE_ERROR;
        return -1;
    }

    printf("[PRESET] Pump: %d, Amount: %d KRW\n", pump_num, amount);
    return 0;
}

// 주유량 모니터링
int monitor_fueling(GasTransaction *trans) {
    trans->state = GAS_STATE_FUELING;

    while (trans->state == GAS_STATE_FUELING) {
        // 주유기로부터 실시간 데이터 수신
        FuelData data;
        if (receive_fuel_data(trans->pump_number, &data) < 0) {
            trans->state = GAS_STATE_ERROR;
            return -1;
        }

        trans->liters = data.liters;
        trans->actual_amount = data.amount;

        printf("\r[FUELING] Liters: %.2f L, Amount: %d KRW",
               trans->liters, trans->actual_amount);
        fflush(stdout);

        // 주유 완료 감지
        if (data.is_complete) {
            printf("\n[FUELING COMPLETE] Total: %.2f L, %d KRW\n",
                   trans->liters, trans->actual_amount);
            break;
        }

        usleep(500000); // 0.5초마다 업데이트
    }

    return 0;
}

// 결제 처리
int process_gas_payment(GasTransaction *trans) {
    trans->state = GAS_STATE_PAYMENT;

    PaymentRequest req = {
        .amount = trans->actual_amount,
        .pump_number = trans->pump_number,
        .liters = trans->liters
    };

    PaymentResponse res;

    if (process_card_payment(&req, &res) < 0) {
        trans->state = GAS_STATE_ERROR;
        return -1;
    }

    if (res.result_code == 0) {
        trans->state = GAS_STATE_COMPLETE;
        strncpy(trans->transaction_id, res.transaction_id, sizeof(trans->transaction_id));

        // 영수증 출력
        print_gas_receipt(trans, &res);

        return 0;
    }

    trans->state = GAS_STATE_ERROR;
    return -2;
}

// 전체 플로우 통합
int execute_gas_transaction(int pump_num, int preset_amount) {
    GasTransaction trans = {0};

    // 1. 주유 예약
    if (process_preset(&trans, pump_num, preset_amount) < 0) {
        printf("[ERROR] Preset failed\n");
        return -1;
    }

    // 2. 주유 시작 대기
    printf("[WAITING] Insert nozzle and start fueling...\n");
    wait_for_fueling_start(pump_num);

    // 3. 주유 모니터링
    if (monitor_fueling(&trans) < 0) {
        printf("[ERROR] Fueling monitoring failed\n");
        return -2;
    }

    // 4. 결제 처리
    printf("[PAYMENT] Processing payment...\n");
    if (process_gas_payment(&trans) < 0) {
        printf("[ERROR] Payment failed\n");
        return -3;
    }

    printf("[SUCCESS] Transaction complete: %s\n", trans.transaction_id);
    return 0;
}
```

---

## 🛠️ 기술 스택 상세

### Android Development Stack

```yaml
Language & Core:
  - Kotlin: 1.9.0
  - Java: 17
  - Gradle: 8.2.0

UI Framework:
  - Jetpack Compose: 1.5.0
  - Compose Material3: 1.1.2
  - Compose Animation: 1.5.0
  - Compose Navigation: 2.7.0

Architecture Components:
  - ViewModel: 2.6.2
  - LiveData: 2.6.2
  - Lifecycle: 2.6.2
  - SavedState: 2.6.2

Dependency Injection:
  - Hilt: 2.48
  - Dagger: 2.48

Asynchronous:
  - Coroutines: 1.7.0
  - Flow: 1.7.0
  - RxJava: 3.1.5 (Legacy)
  - RxAndroid: 3.0.2 (Legacy)

Networking:
  - Retrofit: 2.9.0
  - OkHttp: 4.11.0
  - Gson: 2.10.1
  - Moshi: 1.15.0

Local Storage:
  - Room: 2.5.2
  - DataStore: 1.0.0
  - SharedPreferences

Media:
  - ExoPlayer: 2.19.0
  - CameraX: 1.2.0
  - Coil: 2.4.0 (Image Loading)

Testing:
  - JUnit: 4.13.2
  - Mockk: 1.13.7
  - Espresso: 3.5.1
  - Turbine: 1.0.0 (Flow Testing)
  - Truth: 1.1.3 (Assertions)

Build & CI/CD:
  - Gradle Version Catalogs
  - Convention Plugins
  - GitHub Actions
```

### Embedded Linux Stack

```yaml
Language:
  - C: C11
  - C++: C++17

OS & Kernel:
  - Linux Kernel: 4.14+
  - Buildroot
  - Yocto Project

Architecture:
  - ARM Cortex-A Series
  - ARMv7/ARMv8

Hardware:
  - NFC/RF: PN532, PN533
  - Display: Framebuffer (fbdev)
  - Input: evdev, tslib
  - Serial: UART, USB

Libraries:
  - libnfc
  - OpenSSL
  - libcurl
  - SQLite

Build Tools:
  - CMake
  - Makefiles
  - Cross-compilation toolchains
```

---

## 📐 아키텍처 & 코드 품질

### Clean Architecture 적용

```
┌─────────────────────────────────────────┐
│          Presentation Layer             │
│  ├─ UI (Jetpack Compose)                │
│  ├─ ViewModels                          │
│  └─ UI State Models                     │
└─────────────────────────────────────────┘
                 ↓ (Dependencies)
┌─────────────────────────────────────────┐
│            Domain Layer                 │
│  ├─ Use Cases                           │
│  ├─ Domain Models                       │
│  └─ Repository Interfaces               │
└─────────────────────────────────────────┘
                 ↓ (Dependencies)
┌─────────────────────────────────────────┐
│             Data Layer                  │
│  ├─ Repository Implementations          │
│  ├─ Data Sources (Remote/Local)         │
│  └─ DTOs & Mappers                      │
└─────────────────────────────────────────┘
```

### 코드 품질 지표

| 지표 | 수치 | 도구 |
|------|------|------|
| **코드 커버리지** | 78% | JaCoCo |
| **코드 복잡도** | 평균 5.2 | SonarQube |
| **정적 분석** | 0 Critical Issues | Detekt, Lint |
| **빌드 시간** | 45초 (Clean Build) | Gradle |

---

## 📊 성과 지표

<div align="center">

### 🎯 정량적 성과

| 항목 | 수치 |
|------|------|
| 🚀 **앱 응답속도** | 30% 개선 |
| 📐 **코드 재사용률** | 89.8% |
| 💳 **일일 거래 건수** | 수만 건 |
| 🌍 **상용 서비스** | 5개 프로젝트 |
| ⏱️ **무중단 운영** | 4년간 |
| ⚡ **개발 효율성** | 300% 향상 |
| 🏆 **국제 인증** | Mastercard, VISA LV2 |
| 🔧 **법인 버전** | 12개 단독 개발 |

</div>

---

## 🎯 토스에서 하고 싶은 것

### Why Toss?

**토스플레이스의 결제 단말기 개발**은 제가 4년간 쌓아온 경험과 완벽하게 일치합니다.

1. **결제 도메인 전문성**
   - CU, E1, GS칼텍스 결제 단말기 개발 경험
   - 실시간 금융 거래 처리 최적화 노하우
   - EMV 국제 표준 및 PCI DSS 보안 구현

2. **Modern Android 전문성**
   - Kotlin + Jetpack Compose 상용 서비스 개발
   - MVVM + Clean Architecture 설계
   - TDS (Toss Design System)과 유사한 컴포넌트 시스템 구축 경험

3. **빠른 이터레이션 능력**
   - 모듈화 아키텍처로 확장성 확보
   - 89.8% 코드 재사용률 달성
   - 주간 배포 가능한 CI/CD 경험

### 토스에 기여하고 싶은 것

**1. 결제 UX 혁신**
- 핀테크 결제 단말기 개발 경험을 토스 결제 단말기에 적용
- 30% 성능 개선 노하우로 더 빠른 결제 경험 제공

**2. 안정적인 서비스 운영**
- 4년간 무중단 운영 경험
- 실시간 금융 거래의 안정성과 보안 확보

**3. 기술적 성장**
- 토스의 트렌디한 개발 문화에서 Modern Android 역량 극대화
- 1,000만 유저 서비스 개발 경험으로 한 단계 성장

---

<div align="center">

## 📬 Contact

**Email**: ajpuop@naver.com
**Phone**: +82-10-9888-5478
**GitHub**: [github.com/hyummys](https://github.com/hyummys)
**Portfolio**: [hyummys.github.io](https://hyummys.github.io)

---

### Thank you for reviewing my portfolio!

*"핀테크 결제 시스템 개발 경험을 토스의 결제 혁신에 기여하고 싶습니다."*

</div>
