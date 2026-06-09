# hyummys.github.io

서재현(James Seo)의 프로젝트 쇼케이스 사이트.

나이스정보통신 디바이스 개발실에서 Android 결제 단말기와 Linux 임베디드 단말기를 4년 이상 만들어 왔습니다. Kotlin/Jetpack Compose 앱 레이어부터 AIDL·NDK 기반 HW 제어, C/C++ Linux 임베디드 펌웨어, AOSP 포팅까지 디바이스 OS 전 계층을 다룹니다.

## Live Site

[https://hyummys.github.io](https://hyummys.github.io) — 프로젝트 쇼케이스 단일 페이지.

## 주요 프로젝트 (요약)

### 나이스정보통신 · 디바이스 개발실 (2022.05 ~ 현재)

- **X990 차세대 Android 결제 단말기** — Kotlin/Compose/Hilt 기반 회사 첫 자체 Android 결제 단말기. AIDL 70여 개 HW 인터페이스 통합, 자체 NDK 암호화 모듈. H&M 매장 도입 예정(2026.06).
- **BGF리테일 CU 결제 단말기 (BAM-V1)** — 전국 4,000대+ 운영, 단말당 일 10만 건+ 거래. Serial/BLE 멀티 프로토콜 + XModem 펌웨어 업데이트 구조 설계. 출시 6개월간 멈춤 0건.
- **Mastercard / VISA RF LV2 컨택리스 인증** — PyQt5 카드 에뮬레이터 자체 개발, 두 브랜드 공식 LV2 인증 획득. 사내 EMV 노하우 0에서 시작.
- **Linux 다중 VAN 통합 서명패드** — NICE·KIS·NPG·통합 4개 VAN 사양 단일 코드베이스 처리. 회사 최초 사례, MLB·내셔널지오그래픽 매장 운영 중.
- **Linux API 결제 단말기 플랫폼** — 전처리 빌드 분기 기반 단일 소스 6개 기종 동시 지원. NICE 메인 플랫폼 채택, 50+ 법인 파생.
- **주유소 무선 결제 단말기 (E1, GS칼텍스)** — 다단계 트랜잭션 + 망상 취소 복구. 전국 운영, 일 30만 건+ 거래.

### KT · 미디어 플랫폼 개발팀 (2021.09 ~ 2022.05, 인턴)

- **기가지니 Android TV 전환 (Genie TV)** — Web 셋톱박스를 AOSP 기반 Android TV로 전환. 메인 화면·키즈 콘텐츠 플랫폼 담당. 2022 상반기 정식 런칭.
- **키즈랜드 동화 자동 페이지 분할** — FFmpeg/OpenCV + K-means/DBSCAN으로 애니메이션 동화 50편을 원작 도서의 페이지 단위로 자동 분할.
- **AI 레크리에이션 플랫폼** — Skeleton Detection 기반 동작 인식 게임. KT 공채 인턴 개발 대회 대상 수상.

## 개인 프로젝트

### 한의원 웹사이트 — [toad365.onrender.com](https://toad365.onrender.com)

Django 기반 풀스택 웹사이트. PostgreSQL · 11개 데이터 모델 · TinyMCE 기반 Admin 커스터마이징으로 비개발자가 콘텐츠를 직접 관리할 수 있는 구조.

## 기술 스택

- **Android**: Kotlin · Jetpack Compose · Material 3 · MVVM · Hilt · Coroutines/Flow · Retrofit/OkHttp · Room · ExoPlayer · JUnit/Mockk
- **HW 제어 / 네이티브**: AIDL · NDK/JNI · C/C++ · BLE GATT · Serial 멀티포트 · SEED 암호화
- **임베디드 / 시스템**: Linux Embedded · ARM · AOSP 포팅 · Cross Compilation
- **핀테크 / 보안**: EMV Level 2 (Mastercard/VISA 인증) · PCI DSS · ISO 14443 · NFC/RF · 다중 VAN 통합
- **기타**: Python · Django · PyQt5 · FFmpeg · OpenCV · Git/SVN

## Contact

- GitHub: [@hyummys](https://github.com/hyummys)
- Email: ajpuop@naver.com
- LinkedIn: [hyummy9james](https://www.linkedin.com/in/hyummy9james)

---

*이력서·경력기술서·STAR 기반 프로젝트 상세는 PDF로 별도 전달합니다.*
