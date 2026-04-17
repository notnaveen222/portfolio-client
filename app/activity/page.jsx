'use client'

import { useEffect, useRef, useState } from 'react'
import supabase from '@/lib/supabase'

const BUCKET = 'activity'
const VIEWABLE = ['.txt', '.ipynb', '.md', '.json', '.csv', '.py', '.js', '.ts']

function isViewable(name) {
  return VIEWABLE.some((ext) => name.endsWith(ext))
}

const TOPICS = [
  {
    id: 'slr',
    title: 'Simple Linear Regression',
    tag: 'Supervised Learning',
    body: `Simple linear regression is a statistical method that models the relationship between a single independent variable and a continuous dependent variable by fitting a linear equation to observed data. The model is represented as y = β₀ + β₁x + ε, where β₀ is the intercept, β₁ is the slope, and ε is the error term. The ordinary least squares (OLS) method minimizes the sum of squared residuals to estimate the parameters. It is widely used for prediction and trend analysis in fields such as economics, biology, and engineering.`,
    imports: [
      { code: 'from sklearn.linear_model import LinearRegression', desc: 'LinearRegression — fits a linear model using OLS to minimize residual sum of squares.' },
      { code: 'from sklearn.metrics import mean_squared_error, r2_score', desc: 'mean_squared_error — measures average squared difference between predicted and actual values; r2_score — proportion of variance explained by the model.' },
      { code: 'import matplotlib.pyplot as plt', desc: 'pyplot — used to plot the regression line against the scatter of data points.' },
    ],
  },
  {
    id: 'nbc',
    title: 'Naive Bayes Classification',
    tag: 'Probabilistic Classifier',
    body: `Naive Bayes is a family of probabilistic classifiers based on Bayes' theorem with a strong (naive) assumption of conditional independence between features. Despite this simplification, Naive Bayes classifiers perform surprisingly well in many real-world situations, particularly in text classification and spam filtering. Variants include Gaussian Naive Bayes for continuous data, Multinomial for discrete counts, and Bernoulli for binary features. The classifier is computationally efficient and requires very little training data.`,
    imports: [
      { code: 'from sklearn.naive_bayes import GaussianNB', desc: 'GaussianNB — assumes features follow a Gaussian distribution; suited for continuous numerical data.' },
      { code: 'from sklearn.naive_bayes import MultinomialNB', desc: 'MultinomialNB — designed for discrete feature counts, commonly used in text classification.' },
      { code: 'from sklearn.metrics import accuracy_score, classification_report', desc: 'accuracy_score — fraction of correct predictions; classification_report — per-class precision, recall, and F1.' },
    ],
  },
  {
    id: 'dt',
    title: 'Decision Tree',
    tag: 'Supervised Learning',
    body: `A decision tree is a non-parametric supervised learning algorithm that recursively partitions the feature space into regions by learning simple decision rules inferred from data. Each internal node represents a feature test, each branch represents an outcome, and each leaf node holds a class label or regression value. Splitting criteria include Gini impurity, information gain (entropy), and mean squared error. Decision trees are interpretable but prone to overfitting, which is addressed through pruning or ensemble methods.`,
    imports: [
      { code: 'from sklearn.tree import DecisionTreeClassifier, plot_tree', desc: 'DecisionTreeClassifier — builds the classification tree; plot_tree — renders the trained tree structure as a diagram.' },
      { code: 'from sklearn.tree import export_text', desc: 'export_text — prints the tree as a readable text-based decision path, useful for quick inspection.' },
      { code: 'from sklearn.metrics import confusion_matrix', desc: 'confusion_matrix — table showing true vs. predicted class counts, revealing misclassification patterns.' },
    ],
  },
  {
    id: 'lr',
    title: 'Logistic Regression',
    tag: 'Supervised Learning',
    body: `Logistic regression is a linear model for binary classification that estimates the probability of an outcome using the logistic (sigmoid) function, mapping any real-valued input to the range [0, 1]. The model is trained by maximizing the log-likelihood via gradient descent or iteratively reweighted least squares. Despite its name, it is a classification algorithm. Extensions include multinomial logistic regression for multi-class problems and regularized variants (L1/L2) to prevent overfitting.`,
    imports: [
      { code: 'from sklearn.linear_model import LogisticRegression', desc: 'LogisticRegression — fits a logistic model; supports L1/L2 regularization and multi-class strategies via the solver parameter.' },
      { code: 'from sklearn.preprocessing import StandardScaler', desc: 'StandardScaler — standardizes features to zero mean and unit variance, which logistic regression is sensitive to.' },
      { code: 'from sklearn.metrics import roc_auc_score, roc_curve', desc: 'roc_auc_score — area under ROC curve; roc_curve — computes TPR/FPR thresholds for plotting the ROC curve.' },
    ],
  },
  {
    id: 'knn',
    title: 'K-Nearest Neighbors (KNN)',
    tag: 'Instance-Based Learning',
    body: `K-Nearest Neighbors is a non-parametric, lazy learning algorithm that classifies a data point by majority vote among its k closest neighbors in the feature space, measured using distance metrics such as Euclidean, Manhattan, or Minkowski distance. It requires no explicit training phase, storing all training instances instead. The choice of k significantly affects model performance — small k leads to high variance, large k to high bias. KNN is also used for regression by averaging neighbor outputs.`,
    imports: [
      { code: 'from sklearn.neighbors import KNeighborsClassifier', desc: 'KNeighborsClassifier — classifies samples by majority vote of k nearest neighbors using a chosen distance metric.' },
      { code: 'from sklearn.preprocessing import MinMaxScaler', desc: 'MinMaxScaler — scales features to [0, 1] range; critical for KNN since it is distance-based and sensitive to feature scale.' },
      { code: 'from sklearn.model_selection import cross_val_score', desc: 'cross_val_score — evaluates model with k-fold cross-validation to tune the n_neighbors hyperparameter.' },
    ],
  },
  {
    id: 'svm',
    title: 'Support Vector Machine (SVM)',
    tag: 'Supervised Learning',
    body: `Support Vector Machines find the optimal hyperplane that maximizes the margin between classes in the feature space. Data points closest to the decision boundary are called support vectors and are the only points that influence the hyperplane position. The kernel trick (RBF, polynomial, sigmoid) allows SVMs to operate in high-dimensional implicit feature spaces for non-linearly separable data. SVMs are effective in high-dimensional spaces and are widely used in image classification, bioinformatics, and text categorization.`,
    imports: [
      { code: 'from sklearn.svm import SVC', desc: 'SVC (Support Vector Classifier) — trains a support vector machine; kernel parameter selects RBF, linear, poly, or sigmoid.' },
      { code: 'from sklearn.svm import SVR', desc: 'SVR (Support Vector Regressor) — SVM variant for continuous output prediction using epsilon-insensitive loss.' },
      { code: 'from sklearn.model_selection import GridSearchCV', desc: 'GridSearchCV — exhaustive search over C and gamma hyperparameters to find the optimal SVM configuration.' },
    ],
  },
  {
    id: 'km',
    title: 'K-Means Clustering',
    tag: 'Unsupervised Learning',
    body: `K-Means is an iterative centroid-based clustering algorithm that partitions n observations into k clusters by minimizing the within-cluster sum of squared distances. The algorithm alternates between assigning each point to its nearest centroid and recomputing centroids as the mean of assigned points until convergence. Initialization strategies such as K-Means++ improve the quality of results. The number of clusters k must be specified in advance; methods like the elbow method and silhouette score aid in selection.`,
    imports: [
      { code: 'from sklearn.cluster import KMeans', desc: 'KMeans — partitions data into k clusters by minimizing inertia; init="k-means++" enables smarter centroid initialization.' },
      { code: 'from sklearn.metrics import silhouette_score', desc: 'silhouette_score — measures how similar a point is to its own cluster vs. other clusters; used to evaluate cluster quality.' },
      { code: 'import matplotlib.pyplot as plt', desc: 'pyplot — used to plot the elbow curve (inertia vs. k) and visualize cluster assignments with color-coded scatter plots.' },
    ],
  },
  {
    id: 'kmo',
    title: 'K-Modes Clustering',
    tag: 'Unsupervised Learning',
    body: `K-Modes is an extension of K-Means designed for categorical data. It replaces the mean with the mode and uses a simple matching dissimilarity measure instead of Euclidean distance, counting the number of mismatched categories between data points and cluster modes. The algorithm is efficient and scales well to large datasets with high-dimensional categorical features. K-Prototypes combines K-Means and K-Modes to handle mixed-type datasets containing both numerical and categorical attributes.`,
    imports: [
      { code: 'from kmodes.kmodes import KModes', desc: 'KModes — clusters categorical data using mode-based centroids and Hamming-style dissimilarity; install via pip install kmodes.' },
      { code: 'from kmodes.kprototypes import KPrototypes', desc: 'KPrototypes — handles mixed datasets with both numerical and categorical columns in a single clustering pass.' },
      { code: 'import pandas as pd', desc: 'pandas — used to load and preprocess categorical datasets; KModes expects array-like or DataFrame input.' },
    ],
  },
  {
    id: 'rf',
    title: 'Random Forest',
    tag: 'Ensemble Learning',
    body: `Random Forest is an ensemble learning method that constructs a multitude of decision trees during training and outputs the class that is the mode (classification) or mean prediction (regression) of the individual trees. It introduces two sources of randomness: bootstrap aggregating (bagging) of training samples and random feature subsets at each split. This decorrelates the trees and reduces variance without increasing bias. Feature importance can be computed as the mean decrease in impurity across all trees.`,
    imports: [
      { code: 'from sklearn.ensemble import RandomForestClassifier', desc: 'RandomForestClassifier — builds an ensemble of decision trees; n_estimators sets the number of trees, max_features controls split randomness.' },
      { code: 'from sklearn.ensemble import RandomForestRegressor', desc: 'RandomForestRegressor — regression variant that averages predictions across all trees to reduce variance.' },
      { code: 'import seaborn as sns', desc: 'seaborn — used to visualize feature_importances_ as a bar chart, ranking predictors by their contribution to splits.' },
    ],
  },
  {
    id: 'boost',
    title: 'AdaBoost and XGBoost',
    tag: 'Ensemble Learning',
    body: `AdaBoost (Adaptive Boosting) sequentially trains weak classifiers, reweighting misclassified samples at each iteration so subsequent learners focus on harder examples. The final model is a weighted combination of all weak classifiers. XGBoost (Extreme Gradient Boosting) is a scalable, regularized gradient boosting framework that builds trees sequentially, each correcting residual errors of the prior ensemble. XGBoost incorporates L1/L2 regularization, handles missing values natively, and employs column and row subsampling for speed and generalization.`,
    imports: [
      { code: 'from sklearn.ensemble import AdaBoostClassifier', desc: 'AdaBoostClassifier — combines weak learners iteratively; base_estimator sets the weak learner (default: decision stump), n_estimators controls boosting rounds.' },
      { code: 'from xgboost import XGBClassifier', desc: 'XGBClassifier — gradient boosted trees with regularization; install via pip install xgboost. use_label_encoder=False suppresses legacy warnings.' },
      { code: 'from xgboost import plot_importance', desc: 'plot_importance — visualizes feature importance scores computed by XGBoost based on gain, weight, or cover.' },
    ],
  },
  {
    id: 'reg',
    title: 'Single and Multiple Regression',
    tag: 'Statistical Modeling',
    body: `Regression analysis estimates the relationship between a dependent variable and one or more independent variables. Simple (single) regression models a scalar response with one predictor, while multiple regression extends this to several predictors: y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε. Model quality is assessed using R², adjusted R², residual analysis, and hypothesis tests on coefficients. Multicollinearity among predictors is diagnosed using Variance Inflation Factor (VIF) and addressed via regularization or feature selection.`,
    imports: [
      { code: 'from sklearn.linear_model import LinearRegression', desc: 'LinearRegression — handles both single and multiple predictors; coef_ holds β₁…βₙ, intercept_ holds β₀.' },
      { code: 'from statsmodels.api import OLS, add_constant', desc: 'OLS — fits ordinary least squares with full statistical summary; add_constant prepends the intercept column to the feature matrix.' },
      { code: 'from statsmodels.stats.outliers_influence import variance_inflation_factor', desc: 'variance_inflation_factor — computes VIF per predictor to detect multicollinearity; VIF > 10 signals a problematic variable.' },
    ],
  },
  {
    id: 'pca',
    title: 'Principal Component Analysis (PCA)',
    tag: 'Dimensionality Reduction',
    body: `PCA is an unsupervised linear technique that transforms a dataset into a new coordinate system such that the greatest variance lies along the first axis (first principal component), the second greatest along the second, and so on. It is computed via eigendecomposition of the covariance matrix or singular value decomposition (SVD). PCA is used for noise reduction, visualization, and as a preprocessing step to reduce dimensionality before feeding data into downstream models, thereby mitigating the curse of dimensionality.`,
    imports: [
      { code: 'from sklearn.decomposition import PCA', desc: 'PCA — projects data onto principal components; n_components sets the target dimensionality. explained_variance_ratio_ shows variance retained per component.' },
      { code: 'from sklearn.preprocessing import StandardScaler', desc: 'StandardScaler — PCA is variance-sensitive, so features must be standardized before applying decomposition.' },
      { code: 'import numpy as np', desc: 'numpy — used to compute the covariance matrix manually and inspect eigenvectors/eigenvalues for deeper understanding.' },
    ],
  },
  {
    id: 'som',
    title: 'Self-Organizing Maps (SOM)',
    tag: 'Unsupervised Neural Network',
    body: `Self-Organizing Maps are a type of artificial neural network trained using competitive, unsupervised learning to produce a low-dimensional (typically 2D) discretized representation of the input space, called a map. Neurons in the map compete to respond to input vectors; the winning neuron (Best Matching Unit) and its topological neighbors update their weights toward the input. SOMs preserve topological properties of the input space, making them useful for clustering, visualization, and anomaly detection in high-dimensional data.`,
    imports: [
      { code: 'from minisom import MiniSom', desc: 'MiniSom — lightweight SOM implementation; install via pip install minisom. Constructor takes grid dimensions, input length, learning rate, and sigma.' },
      { code: 'from sklearn.preprocessing import MinMaxScaler', desc: 'MinMaxScaler — SOM weight initialization assumes normalized input; scale all features to [0, 1] before training.' },
      { code: 'import matplotlib.pyplot as plt', desc: 'pyplot — used to render the U-matrix (unified distance matrix) that visualizes cluster boundaries on the SOM grid.' },
    ],
  },
  {
    id: 'ql',
    title: 'Q-Learning',
    tag: 'Reinforcement Learning',
    body: `Q-Learning is a model-free reinforcement learning algorithm that learns the value of an action in a particular state (Q-value) by iteratively updating estimates based on received rewards and the maximum expected future reward. The update rule follows the Bellman equation: Q(s,a) ← Q(s,a) + α[r + γ·max Q(s',a') − Q(s,a)]. It converges to the optimal action-value function under conditions of sufficient exploration. Deep Q-Networks (DQN) approximate the Q-function with a neural network for large state spaces.`,
    imports: [
      { code: 'import numpy as np', desc: 'numpy — used to initialize and update the Q-table (states × actions matrix) and to implement the epsilon-greedy action selection policy.' },
      { code: 'import gym', desc: 'gym (OpenAI Gymnasium) — provides standard RL environments like FrozenLake and CartPole; install via pip install gymnasium.' },
      { code: 'import random', desc: 'random — used for epsilon-greedy exploration: with probability ε a random action is chosen, otherwise the greedy action from the Q-table.' },
    ],
  },
]

function IpynbViewer({ notebook }) {
  const cells = notebook.cells ?? []
  return (
    <div className="space-y-3">
      {cells.map((cell, i) => {
        const source = Array.isArray(cell.source) ? cell.source.join('') : cell.source
        const outputs = cell.outputs ?? []
        return (
          <div key={i}>
            <div className={`text-xs mb-1 ${cell.cell_type === 'markdown' ? 'text-blue-400/60' : 'text-yellow-400/60'}`}>
              [{cell.cell_type}]
            </div>
            <pre className="bg-white/5 p-3 rounded text-xs text-white/80 whitespace-pre-wrap overflow-x-auto">
              {source}
            </pre>
            {outputs.map((out, j) => {
              const text = out.text
                ? (Array.isArray(out.text) ? out.text.join('') : out.text)
                : out['text/plain']
                  ? (Array.isArray(out['text/plain']) ? out['text/plain'].join('') : out['text/plain'])
                  : null
              if (!text) return null
              return (
                <pre key={j} className="mt-1 border-l-2 border-white/20 pl-3 text-xs text-white/40 whitespace-pre-wrap overflow-x-auto">
                  {text}
                </pre>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default function ActivityPage() {
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const [viewer, setViewer] = useState(null)
  const [loading, setLoading] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const [titleClicks, setTitleClicks] = useState(0)
  const clickTimer = useRef(null)
  const inputRef = useRef(null)

  async function fetchFiles() {
    const { data, error } = await supabase.storage.from(BUCKET).list('', {
      sortBy: { column: 'created_at', order: 'desc' },
    })
    if (!error) setFiles(data ?? [])
  }

  useEffect(() => { fetchFiles() }, [])

  // secret: click the page title 5 times to reveal panel
  function handleTitleClick() {
    const next = titleClicks + 1
    setTitleClicks(next)
    clearTimeout(clickTimer.current)
    if (next >= 5) {
      setPanelOpen((p) => !p)
      setTitleClicks(0)
      if (!panelOpen) fetchFiles()
    } else {
      clickTimer.current = setTimeout(() => setTitleClicks(0), 1500)
    }
  }

  async function handleUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    const { error } = await supabase.storage.from(BUCKET).upload(file.name, file, { upsert: true })
    if (error) alert('Upload failed: ' + error.message)
    else await fetchFiles()
    setUploading(false)
    inputRef.current.value = ''
  }

  function getUrl(fileName) {
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(fileName)
    return data.publicUrl
  }

  async function handleView(fileName) {
    if (viewer?.name === fileName) { setViewer(null); return }
    setLoading(fileName)
    const { data, error } = await supabase.storage.from(BUCKET).download(fileName)
    if (error) { alert('Failed to load: ' + error.message); setLoading(false); return }
    const text = await data.text()
    if (fileName.endsWith('.ipynb')) {
      try { setViewer({ name: fileName, content: JSON.parse(text), type: 'ipynb' }) }
      catch { setViewer({ name: fileName, content: text, type: 'text' }) }
    } else {
      setViewer({ name: fileName, content: text, type: 'text' })
    }
    setLoading(false)
  }

  async function handleDelete(fileName) {
    const { error } = await supabase.storage.from(BUCKET).remove([fileName])
    if (error) alert('Delete failed: ' + error.message)
    else {
      setFiles((prev) => prev.filter((f) => f.name !== fileName))
      if (viewer?.name === fileName) setViewer(null)
    }
  }

  async function handleDownload(fileName) {
    const { data, error } = await supabase.storage.from(BUCKET).download(fileName)
    if (error) { alert('Download failed: ' + error.message); return }
    const url = URL.createObjectURL(data)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    a.click()
    URL.revokeObjectURL(url)
  }

  async function handleCopy(fileName) {
    let text
    if (viewer?.name === fileName) {
      text = viewer.type === 'ipynb'
        ? (viewer.content.cells ?? []).map((c) => Array.isArray(c.source) ? c.source.join('') : c.source).join('\n\n')
        : viewer.content
    } else {
      const { data, error } = await supabase.storage.from(BUCKET).download(fileName)
      if (error) { alert('Copy failed: ' + error.message); return }
      text = await data.text()
      if (fileName.endsWith('.ipynb')) {
        try {
          const nb = JSON.parse(text)
          text = (nb.cells ?? []).map((c) => Array.isArray(c.source) ? c.source.join('') : c.source).join('\n\n')
        } catch {}
      }
    }
    await navigator.clipboard.writeText(text)
  }

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#202122] font-sans">
      {/* Wikipedia-style header */}
      <div className="border-b border-[#a2a9b1] bg-white px-6 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#3366cc] flex items-center justify-center text-white text-xs font-bold select-none">ML</div>
        <span className="text-sm text-[#54595d]">Machine Learning Laboratory — Reference Notebook</span>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Title */}
        <h1
          onClick={handleTitleClick}
          className="text-3xl font-serif font-normal text-[#202122] mb-1 cursor-default select-none border-b border-[#a2a9b1] pb-2"
        >
          Supervised & Unsupervised Learning — Laboratory Experiments
        </h1>
        <p className="text-xs text-[#54595d] mb-6">From the Machine Learning Lab Series · 14 experiments</p>

        {/* Table of contents */}
        <div className="bg-[#f8f9fa] border border-[#a2a9b1] inline-block px-5 py-4 mb-8 text-sm">
          <p className="font-bold mb-2 text-[#202122]">Contents</p>
          <ol className="list-decimal list-inside space-y-0.5 columns-2 gap-x-8">
            {TOPICS.map((t, i) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-[#3366cc] hover:underline">
                  {t.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {TOPICS.map((t, i) => (
            <section key={t.id} id={t.id}>
              <h2 className="text-xl font-serif border-b border-[#a2a9b1] pb-1 mb-3 text-[#202122]">
                <span className="text-[#54595d] text-base mr-2">{i + 1}.</span>{t.title}
              </h2>
              <span className="inline-block text-xs bg-[#eaf3fb] text-[#3366cc] border border-[#3366cc]/30 px-2 py-0.5 rounded mb-3">
                {t.tag}
              </span>
              <p className="text-sm leading-relaxed text-[#202122] mb-4">{t.body}</p>

              {t.imports && (
                <div className="border border-[#a2a9b1] rounded overflow-hidden">
                  <div className="bg-[#eaecf0] px-3 py-1.5 text-xs font-semibold text-[#54595d] border-b border-[#a2a9b1]">
                    Common Imports
                  </div>
                  <div className="divide-y divide-[#eaecf0]">
                    {t.imports.map((imp, j) => (
                      <div key={j} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-3 py-2.5">
                        <code className="text-xs bg-[#f6f8fa] border border-[#d0d7de] text-[#1f2328] px-2 py-1 rounded font-mono whitespace-nowrap shrink-0">
                          {imp.code}
                        </code>
                        <span className="text-xs text-[#54595d] leading-relaxed self-center">{imp.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-4 border-t border-[#a2a9b1] text-xs text-[#54595d]">
          Retrieved from internal laboratory reference. Last updated 2025.
        </div>
      </div>

      {/* Hidden file panel — slides in from right */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-[#1a1a1a] text-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ${panelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <span className="text-sm font-mono">files</span>
          <button onClick={() => setPanelOpen(false)} className="text-white/40 hover:text-white text-xs">✕ close</button>
        </div>

        <div className="px-5 py-4 border-b border-white/10">
          <input ref={inputRef} type="file" className="hidden" onChange={handleUpload} />
          <button
            onClick={() => inputRef.current.click()}
            disabled={uploading}
            className="w-full py-2 border border-white/30 text-xs font-mono hover:bg-white hover:text-black transition-colors disabled:opacity-40"
          >
            {uploading ? 'uploading...' : 'upload file'}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 font-mono">
          {files.length === 0 && (
            <p className="text-white/30 text-xs">no files yet</p>
          )}
          <ul className="space-y-4">
            {files.map((f) => (
              <li key={f.id ?? f.name}>
                <div className="flex items-center gap-2 flex-wrap">
                  {isViewable(f.name) ? (
                    <button
                      onClick={() => handleView(f.name)}
                      className="text-xs text-white/70 hover:text-white underline underline-offset-4 text-left"
                    >
                      {loading === f.name ? 'loading...' : f.name}
                    </button>
                  ) : (
                    <a
                      href={getUrl(f.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/70 hover:text-white underline underline-offset-4"
                    >
                      {f.name}
                    </a>
                  )}
                </div>
                <div className="flex gap-2 mt-1.5">
                  <button onClick={() => handleDownload(f.name)} className="text-[10px] text-white/40 hover:text-white border border-white/15 hover:border-white/50 px-2 py-0.5 transition-colors">
                    split
                  </button>
                  {isViewable(f.name) && (
                    <button onClick={() => handleCopy(f.name)} className="text-[10px] text-white/40 hover:text-white border border-white/15 hover:border-white/50 px-2 py-0.5 transition-colors">
                      takkt
                    </button>
                  )}
                  <button onClick={() => handleDelete(f.name)} className="text-[10px] text-red-500/50 hover:text-red-400 border border-red-500/15 hover:border-red-400/50 px-2 py-0.5 transition-colors">
                    delete
                  </button>
                </div>

                {viewer?.name === f.name && (
                  <div className="mt-3 border border-white/10 p-3 rounded max-h-96 overflow-y-auto">
                    {viewer.type === 'ipynb'
                      ? <IpynbViewer notebook={viewer.content} />
                      : <pre className="text-xs text-white/70 whitespace-pre-wrap">{viewer.content}</pre>
                    }
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
